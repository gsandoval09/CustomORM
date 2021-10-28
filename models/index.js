// import models
const Product = require('../../../../../../CustomORM/models/Product');
const Category = require('../../../../../../CustomORM/models/Category');
const Tag = require('../../../../../../CustomORM/models/Tag');
const ProductTag = require('../../../../../../CustomORM/models/ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
    
    
    
