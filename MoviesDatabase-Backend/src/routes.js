const express = require('express');

const routes = express.Router();

const auth = require('./middlewares/authentication');

const AdmController = require('./controllers/AdmController');
const AdmValidator = require('./validators/AdmValidator');

const UserController = require('./controllers/UserController');
const UserValidator = require('./validators/UserValidator');

const MovieController = require('./controllers/MovieController')
const MovieValidator = require('./validators/MovieValidator')

module.exports = routes;