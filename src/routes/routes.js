// Initialize the express router

let router = require('express').Router();

// set default api response 

router.get('/', function(req,res){
    res.json({
        status:'API is working',
        message:'Welcome to Rest API crafted with love!,by Radhey.'
    });
});

// Export API routes

// Import product controller
var productController = require('../controllers/productControllers');

// Product Routes

router.route('/product')
       .get(productController.index)
       .post(productController.new)
       

router.route('/product/:product_id')
       .get(productController.view)
       .patch(productController.update)
       .put(productController.update)
       .delete(productController.delete);

module.exports = router;

