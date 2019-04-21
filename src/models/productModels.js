var mongoose = require('mongoose');

// setup schema

var productSchema = mongoose.Schema({
    brandName: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productId: {
        type: Number,
        required: true
    }
});

// export contact  model

var Product = module.exports = mongoose.model('product',productSchema);

module.exports.get = function(callback,limit){
    Product.find(callback).limit(limit);
}
