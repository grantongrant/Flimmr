const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Album } = require('../../db/models');

router.post('/', asyncHandler(async (req, res) => {
    const { userId, name, description } = req.body;
    const newComment = await Album.create({userId, name, description});
    return res.json(newComment);
  }));

module.exports = router;