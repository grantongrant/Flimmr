const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Album } = require('../../db/models');

router.post('/', asyncHandler(async (req, res) => {
    const { userId, name, description } = req.body;
    const newComment = await Album.create({userId, name, description});
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

module.exports = router;