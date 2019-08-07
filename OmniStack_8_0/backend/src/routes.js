const express = require('express');
const routes = express.Router();
const DevController = require ('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');
// GET, POST, PUT, DELETE => Utilizando Rest
//When browser make route request always is get method

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;