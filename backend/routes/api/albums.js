const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Album, Image } = require('../../db/models');

router.post('/', asyncHandler(async (req, res) => {
    const { userId, name, coverImg, description } = req.body;
    const newComment = await Album.create({userId, name, coverImg, description});
    return res.json(newComment);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const albums = await Album.findAll({
        where: {
          userId: id
        }
    });
  
    return res.json(albums);
}));

router.get('/album/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const album = await Album.findByPk(id);
    return res.json(album);
}))

router.put('/edit', asyncHandler(async (req, res) => {
  
    const { albumId, name, description } = req.body;
    console.log("REQ BODY ODY ODY", req.body)

    const album = await Album.findByPk(albumId)
  
    await album.update({
      id: albumId,
      name: name,
      description: description,
    })
    
    await album.save();
    return res.json(album);
  }));

  router.delete('/:id/delete', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id,10);
    const images = await Image.findAll({
        where: {
            albumId: id
        }
    })

    images.forEach(image => {
        image.update ({
            albumId: null
          });
        image.save();
    });

    const album = await Album.findByPk(id);
    await album.destroy();
    return res.json(album);
  }));

module.exports = router;