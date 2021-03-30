const express = require('express');

const routes = express.Router();

const Authorization = require('./middlewares/authentication');
// lembrar de usar em todas as requisições que exigem verificar se o usuário está logado

const SessionController = require("./controllers/SessionController");
const SessionValidator = require('./validators/SessionValidator');

const AdmController = require('./controllers/AdmController');
const AdmValidator = require('./validators/AdmValidator');

const UserController = require('./controllers/UserController');
const UserValidator = require('./validators/UserValidator');

const MovieController = require('./controllers/MovieController')
const MovieValidator = require('./validators/MovieValidator')

//Sesion
routes.post('/login', SessionValidator.signIn, SessionController.signIn)

//Administrador
routes.post('/adm', AdmValidator.create, Authorization.authenticateToken, AdmController.create);
routes.get('/adm', AdmValidator.getAll, Authorization.authenticateToken, AdmController.getAll);
routes.get('/adm:adm_id', AdmValidator.getById, Authorization.authenticateToken, AdmController.getById);
routes.put('/adm:adm_id', AdmValidator.update, Authorization.authenticateToken, AdmController.update);
routes.delete('/adm:adm_id', AdmValidator.delete, Authorization.authenticateToken, AdmController.delete);

//User
routes.post('/user', UserValidator.create, Authorization.authenticateToken, UserController.create);
routes.get('/user', UserValidator.getAll, Authorization.authenticateToken, UserController.getAll);
routes.get('/user:user_id', UserValidator.getById, Authorization.authenticateToken, UserController.getById);
routes.put('/user:user_id', UserValidator.update, Authorization.authenticateToken, UserController.update);
routes.delete('/user:user_id', UserValidator.delete, Authorization.authenticateToken, UserController.delete);

//Movie
routes.post('/movie', MovieValidator.create, Authorization.authenticateToken, MovieController.create);
routes.get('/movie', MovieValidator.getAll, Authorization.authenticateToken, MovieController.getAll);
routes.get('/movie:movie_id', MovieValidator.getById, Authorization.authenticateToken, MovieController.getById);
routes.put('/movie:movie_id', MovieValidator.update, Authorization.authenticateToken, MovieController.update);
routes.delete('/movie:movie_id', MovieValidator.delete, Authorization.authenticateToken, MovieController.delete);

module.exports = routes;