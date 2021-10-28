const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    
    attributes: ['id', 'category_name'],
    
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
    
  .then(dbCategoryData => res.json(dbCategoryData))
    
    .catch(err => {
      
      console.log(err);
      
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  
  Category.findOne({
    
    where: {
      
      id: req.params.id
    },
    attributes: ['id', 'category_name'],
    
    include: [
      {
        model: Product,
        
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]

  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      
      res.status(404).json({message: 'ERROR'});
     
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

  router.post('/', (req, res) => {
    // create a new category
    Category.create({
      
      category_name: req.body.category_name
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    
    .catch(err => {
      
      console.log(err);
      
      res.status(500).json(err);
  });
});

  router.put('/:id', (req, res) => {
    // update a category by its `id` value
  Category.update(req.body, {
   
    where: {
     
      id: req.params.id
  }
  })
    .then(dbCategoryData => {
     
      if (!dbCategoryData[0]) {
      
        res.status(404).json({ message: "Error" });
       
        return;
    }
    res.json(dbCategoryData);
  })
  .catch(err =>  {
   
    console.log(err);
   
    res.status(500).json(err);
  });
  });


  router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
  Category.destroy
  
  
  
  
  });

  module.exports = router;
