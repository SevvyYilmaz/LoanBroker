const ProductController = require('../controllers/product.controller');  //Import the code from Code Block 1
module.exports = (app) => {

    app.get('/api/products', ProductController.getAllProducts);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.getProduct);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
    
}

