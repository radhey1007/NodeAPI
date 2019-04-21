// Import contact model
Product = require('../models/productModels');


// Handle index Product Info

exports.index = function(req,res){
    Product.get(function (err,products){
        if(err){
            res.json({
                status:'error',
                message:err
            });
        }        
        res.send(products);
    });
}

// Handle create Contact actions
exports.new = function(req,res){

    console.log('**********Request Data*************')
    console.table(req.body);

    var product = new Product();
    product.brandName = req.body.brandName;
    product.productName = req.body.productName;
    product.productId = req.body.productId;

// save the contact and check for errors
    product.save(function (err){
       
        if(err){
            res.json({
                status:'error',
                message:err,
                data:''
            });
         }
            
            res.json({
                status:'Success',
                message:'Data Inserted Successfully !',
                data:product
            })    
    }); 

}

// Handle view contact info

exports.view = function(req,res){

    console.table(req.body);

    Product.findById(req.params.product_id , function(err,product) {
        if(err)
            res.send(err);        
            res.json({
                message:'Contact details loading...',
                data:product
            });    
        });  

};

// update action

exports.update = function(req,res){
Product.findById(req.params.product_id, function(err,product){

    if(err)
      res.send(err);

      product.brandName = req.body.brandName;
      product.productName = req.body.productName;
      product.productId = req.body.productId;
    
    // save the contact information and chcek for error

    product.save(function(err){
        if(err){
          res.json(err);
        }
        
        res.json({
            message:'Contact updated Successfully',
            data:product
        });
    });
});
};


 // delete contact

exports.delete = function(req,res){
    Product.remove({
        _id:req.params.product_id
    },function(err,product){
        if(err){
            res.json(err);
        }
        res.json({
             message:'Contact deleted successfully',
             status:"success"
        });

    }   
);

};


