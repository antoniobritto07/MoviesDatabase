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
//LEMBRAR DE ADICIONAR O TOKEN DE VALIDAÇÃO EM TODAS AS ROTAS DEPOIS QUANDO ESTIVER FUNCIONANDO

//quando nao tiver nenhum adm criado, tem que tirar as validações 
//de isAdmin e do token criado quando pessoa faz login para conseguir criar
routes.post('/adm', AdmValidator.create, Authorization.authenticateToken, Authorization.isUserAdmin, AdmController.create);
routes.get('/adm', Authorization.authenticateToken, Authorization.isUserAdmin, AdmController.getAll);
routes.get('/adm/:adm_id', AdmValidator.getById, Authorization.authenticateToken, Authorization.isUserAdmin, AdmController.getById);
routes.put('/adm/:adm_id', AdmValidator.update, Authorization.authenticateToken, Authorization.isUserAdmin, AdmController.update);
routes.delete('/adm/:adm_id', AdmValidator.delete, Authorization.authenticateToken, Authorization.isUserAdmin, AdmController.delete);

//User
routes.post('/user', UserController.create);
routes.get('/user', Authorization.authenticateToken, UserController.getAll);
routes.get('/user/:user_id', UserValidator.getById, Authorization.authenticateToken, UserController.getById);
routes.put('/user/:user_id', UserValidator.update, Authorization.authenticateToken, UserController.update);
routes.delete('/user/:user_id', UserValidator.delete, Authorization.authenticateToken, UserController.delete);

//Movie
routes.post('/movie/:movie_user_id', Authorization.authenticateToken, MovieController.create);
routes.get('/movie/:movie_user_id', Authorization.authenticateToken, MovieController.getAll);
routes.get('/movie/:movie_user_id/:movie_id', Authorization.authenticateToken, MovieController.getById);
routes.put('/movie/:movie_user_id/:movie_id', MovieValidator.update, Authorization.authenticateToken, MovieController.update);
routes.delete('/movie/:movie_user_id/:movie_id', Authorization.authenticateToken, MovieController.delete);

module.exports = routes;