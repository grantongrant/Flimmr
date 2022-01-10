const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Image } = require('../../db/models');
const { validateCreate } = require('../../utils/validation');

router.get('', asyncHandler(async (req, res) => {
  const images = await Image.findAll();
  res.json(images);
}));

router.post('', validateCreate, asyncHandler(async (req, res) => {
  const image = await Image.create(req.body);
  res.json(image);
}));

module.exports = router;
