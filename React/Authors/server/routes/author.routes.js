const AuthorController = require('../controllers/author.controller');
const {authenticateUser} = require("../config/jwt.config");

module.exports = (app) => {

    app.post('/api/author',authenticateUser, AuthorController.createAuthor);
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.put('/api/author/:id',authenticateUser,AuthorController.updateAuthor)
    app.get('/api/author', AuthorController.getAllAuthors);
    app.delete('/api/author/:id',authenticateUser,AuthorController.deleteAuthor)
}