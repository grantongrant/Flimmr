const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Image, Album } = require('../../db/models');
const { validateCreate, validateUpdate } = require('../../utils/validation');

const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');


router.get('', asyncHandler(async (req, res) => {
  const images = await Image.findAll();
  return res.json(images);
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

    // await image.update({
    //   views: image.views + 1
    // });
    // await image.save();
    return res.json(image);

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

router.put('/', asyncHandler(async (req, res) => {
  const id = parseInt(req.body.updatedPhoto.singlePhotoId, 10);
  const image = await Image.findByPk(id);
  await image.update ({
    albumId: req.body.updatedPhoto.idOfAlbum,
  });
  await image.save();
  return res.json(image);
}));

router.get('/view/:id', asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const image = await Image.findByPk(id);

  await image.update({
    views: image.views + 1
  });
  await image.save();
  return res.json(image)
}))


router.get('/album/:id', asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10)
  const images = await Image.findAll({
    where: {
      albumId: id
    }
  })
  return res.json(images)
}))

module.exports = router;
