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
  return res.json(image);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id,10);
    const image = await Image.findByPk(id);
    res.json(image);
  }));

router.delete('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id,10);
    const image = await Image.findByPk(id);
    await image.destroy();
    return res.json(image);
  }));

router.put('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const image = await Image.findByPk(id);
    await image.update(req.body);
    await image.save();
    return res.json(image);
}));

module.exports = router;
