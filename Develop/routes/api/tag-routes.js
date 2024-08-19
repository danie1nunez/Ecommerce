const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  const allTags= await Tag.findAll({
    include: [{model: Product}]
  })
  res.status(200).json(allTags)

  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const oneTags= await Tag.findByPk(req.params.id,{
      include: [{model: Product}]
    });
  res.status(200).json(oneTags)
  }catch (err) {
    res.status(400).json(err);
    console.error(err)
  };
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((tag) =>{
      res.status(200).json(tag);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
  .then((tag) =>{
    res.status(200).json(tag);
  })
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData= await Tag.destroy({
      where: {
        id: req.params.id,
      }
    });
      
    if(!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return
      };
      res.status(200).json(tagData);

    }catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;
