const AuthorController = require('../controllers/author.controller');
const {authenticate} = require("../config/jwt.config"); //logged in users will have a token

module.exports = (app) => {

    // app.get('/api/author/:id', AuthorController.getAuthor);
    app.post('/api/author',authenticate, AuthorController.createAuthor);

    // get all added authors from the username
    app.get('/api/allAuthors/:username',authenticate,AuthorController.findAllAuthorsByUser)
    app.get('/api/author/:id',AuthorController.getAuthor)
    app.put('/api/author/:id',authenticate,AuthorController.updateAuthor)
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.delete('/api/author/:id',authenticate,AuthorController.deleteAuthor)
}