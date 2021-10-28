const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;






// const router = require('express').Router();
// const apiRoutes = require('./api');

// router.use('/api', apiRoutes);

// router.use((req,res) => {
//     res.send("this is a test!")
// });

// module.exports = router;