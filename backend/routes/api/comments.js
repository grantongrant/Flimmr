const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Comment } = require('../../db/models');


router.get('/:id', asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const comments = await Comment.findAll({
      where: {
        imageId: id
      }
  });

  return res.json(comments);
}));

router.post('/', asyncHandler(async (req, res) => {
  const { userId, imageId, body } = req.body;
  const newComment = await Comment.create({userId, imageId, body});
  return res.json(newComment);
}));

  module.exports = router;