const AuthorController = require('../controllers/author.controller');
const {authenticateUser} = require("../config/jwt.config");

module.exports = (app) => {

    // app.get('/api/author/:id', AuthorController.getAuthor);
    app.post('/api/author',authenticateUser, AuthorController.createAuthor);

    // get all added authors from the username
    app.get('/api/authors/:username',authenticateUser,AuthorController.findAllAuthorsByUser)
    app.put('/api/author/:id',authenticateUser,AuthorController.updateAuthor)
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.delete('/api/author/:id',authenticateUser,AuthorController.deleteAuthor)
}