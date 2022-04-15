const UserController = require('../controllers/user.controller');
const {authenticateUser} = require("../config/jwt.config");

module.exports = (app) => {
    // User Login/Logout and Registration
    app.post('/api/users/register', UserController.register);
    app.post('/api/users/login', UserController.login);
    app.post('/api/users/logout', UserController.logout);

    // Retrieve all users in db
    app.get('/api/users/',UserController.getAllUsers) 

    // Retrieve one user by id
    // app.get('/api/user/:id',UserController.getOneUser) 
    app.put('/api/users/:id',UserController.updateUser) 

    // Retrieve who is currently logged in
    app.get('/api/users/user',authenticateUser,UserController.getLoggedInUser) 
}