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
routes.post('/adm', AdmValidator.create, AdmController.create);
routes.get('/adm', AdmController.getAll);
routes.get('/adm/:adm_id', AdmValidator.getById, AdmController.getById);
routes.put('/adm/:adm_id', AdmValidator.update, AdmController.update);
routes.delete('/adm/:adm_id', AdmValidator.delete, AdmController.delete);

//User
routes.post('/user', UserController.create);
routes.get('/user', UserController.getAll);
routes.get('/user/:user_id', UserValidator.getById, UserController.getById);
routes.put('/user/:user_id', UserValidator.update, UserController.update);
routes.delete('/user/:user_id', UserValidator.delete, UserController.delete);

//Movie
routes.post('/movie/:movie_user_id', MovieController.create);
routes.get('/movie/:movie_user_id', MovieController.getAll);
routes.get('/movie/:movie_user_id/:movie_id', MovieController.getById);
routes.put('/movie/:movie_user_id/:movie_id', MovieValidator.update, MovieController.update);
routes.delete('/movie/:movie_user_id/:movie_id', MovieController.delete);

module.exports = routes;