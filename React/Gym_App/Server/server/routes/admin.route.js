const AdminController = require('../controllers/admin.controller');
module.exports = (app) => {

    app.post('/api/admin/register', AdminController.register);
    app.post('/api/admin/login', AdminController.login);
    app.post('/api/admin/logout', AdminController.logout);
    app.get('/api/admin/show/:id',AdminController.getAdmin) 
    app.put('/api/admin/edit/:id',AdminController.updateAdmin) 
}