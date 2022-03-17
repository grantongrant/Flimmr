// connect all the routes here

const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const imagesRouter = require('./images');
const commentsRouter = require('./comments.js');
const albumsRouter = require('./albums.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/images', imagesRouter);

router.use('/comments', commentsRouter);

router.use('/albums', albumsRouter);

// router.use('/comments', commentsRouter);

// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

module.exports = router;
