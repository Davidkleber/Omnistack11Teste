const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


routes.post('/session', SessionController.create);  //rota de login


routes.get('/ongs', OngController.index);   //lista de ongs cadastradas
routes.post('/ongs', OngController.create); //cadastro das ongs


routes.get('/profile', ProfileController.index);    //prof


routes.get('/incidents', IncidentController.index);             //rota dos incidentes/casos cadastrados
routes.post('/incidents', IncidentController.create);           //rota do cadastro dos incidentes/casos
routes.delete('/incidents/:id', IncidentController.delete)      // delete incidentes/casos

module.exports = routes;