const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

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
  app.use(helmet({
    contentSecurityPolicy: false
  }));

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


module.exports = app;
