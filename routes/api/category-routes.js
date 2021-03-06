const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll(
    {
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    }
  )
    .then(results => {
      res.json(results);
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(results => res.json(results));
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then(results => res.json(results));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(results => {
      if (!results) {
        res.status(404).json({ message: 'This Category does not exist.' });
        return
      }
      res.json(results);

    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(results => {
      if (!results) {
        res.status(404).json({ message: 'This Category does not exist.' });
        return
      }
      res.json(results);
    });
});

module.exports = router;
