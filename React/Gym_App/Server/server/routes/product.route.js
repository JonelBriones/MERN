const ProductController = require('../controllers/product.controller');
const {authenticate} = require("../config/jwt.config");

module.exports = (app) => {

                    /* ----- Admin Only ----- */
    app.post('/api/products/add',authenticate, ProductController.createProduct);
    app.get('/api/products/show/:id', ProductController.getProduct);
    app.put('/api/products/:id',ProductController.updateProduct)
    app.get('/api/admin/products/:adminName',authenticate, ProductController.findAllProductsByAdmin);
    // app.get('/api/products', ProductController.getAllProducts);
    app.delete('/api/admin/products/:id',ProductController.deleteProduct)

                    /* ----- Users Only ----- */
    // app.post('/api/admin/products/add', ProductController.createProduct);
    // app.get('/api/admin/products/show/:id', ProductController.getProduct);
    // app.put('/api/admin/products/:id',ProductController.updateProduct)
    // app.get('/api/admin/products', ProductController.getAllProducts);
    // app.delete('/api/admin/products/:id',ProductController.deleteProduct)

}