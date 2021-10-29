const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');
const tagRoutes = require('./tagRoutes');

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