const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Comment, User } = require('../../db/models');


router.get('/:id', asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const comments = await Comment.findAll({
      where: {
        imageId: id
      },
      include: {
        model: User
      }
  });

  return res.json(comments);
}));

router.post('/', asyncHandler(async (req, res) => {
  const { userId, imageId, body } = req.body;
  const newComment = await Comment.create({userId, imageId, body});
  return res.json(newComment);
}));

router.delete('/:id/delete', asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id,10);
  const comment = await Comment.findByPk(id);
  await comment.destroy();
  return res.json(comment);
}));

  module.exports = router;