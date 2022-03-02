const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const{ ValidationError } = require("sequelize");

const routes = require('./routes');
const { environment } = require("./config");
// isProduction will be true if environment is in production
const isProduction = environment === "production";

// initialize the Express application:
const app = express();

// connect morgan middleware for logging info about req and res
app.use(morgan("dev"));

// parse cookies, parse json bodies of req with 'content-type':'application/json'
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// allow CORS in dev only because react frontend will be served from different server than express
//      in production, react and express resources come from same origin
// enable better security with helmet
//      disable content security policy in helment
// add csurf and configure it to use cookies

// Security Middleware
if (!isProduction) {
    // enable cors only in development
    app.use(cors());
  }
  // helmet helps set a variety of headers to better secure your app
  app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

  // Set the _csrf token and create req.csrfToken method
  app.use(
    csurf({
      cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true,
      },
    })
  );

app.use(routes); // connect routes

// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
  });

// Process sequelize errors
app.use((err, _req, _res, next) => {
    // check if error is a Sequelize error:
    if (err instanceof ValidationError) {
      err.errors = err.errors.map((e) => e.message);
      err.title = 'Validation error';
    }
    next(err);
});

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
