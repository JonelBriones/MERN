const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.get('/api/product', ProductController.getAllProduct);
	app.post('/api/product', ProductController.createProduct);
    app.get('/api/product/:id', ProductController.getProduct);
    app.delete('/api/product/:_id',ProductController.deleteAnExistingProduct)
}