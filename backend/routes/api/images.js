const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Image } = require('../../db/models');
const { validateCreate, validateUpdate } = require('../../utils/validation');

const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');


router.get('', asyncHandler(async (req, res) => {
  const images = await Image.findAll();
  res.json(images);
}));

router.post('', singleMulterUpload("image"), asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const imageUrl = await singlePublicFileUpload(req.file);
  const image = await Image.create({userId, imageUrl});
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
    await image.update({
      id: req.body.photo.id,
      title: req.body.photo.title,
      description: req.body.photo.description
    });
    await image.save();
    return res.json(image);
}));

module.exports = router;
