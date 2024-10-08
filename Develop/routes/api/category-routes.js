const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
  const allCategories= await Category.findAll({
    include: [{model: Product}]
  })
  res.status(200).json(allCategories)
  }catch (err) {
    res.status(400).json(err);
    console.error(err)
  };
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const oneCategory= await Category.findByPk(req.params.id,{
      include: [{model: Product}]
    });
  res.status(200).json(oneCategory)

  }catch (err) {
    res.status(400).json(err);
    console.error(err)
  };
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((c) =>{
    res.status(200).json(c);
  });
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    })
      res.status(200).json(category);
  }catch (err) {
    res.status(500).json(err);
    console.error(err)
  }
});

router.delete('/:id',async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData= await Category.destroy({
      where: {
        id: req.params.id,
      }
    });
      
    if(!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return
      };
      res.status(200).json(categoryData);

    }catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;
