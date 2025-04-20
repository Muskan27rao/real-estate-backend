const routes = require('express').Router();
const areaController = require('../controllers/areaController');

routes.post('/add', areaController.addArea);
routes.get('/get', areaController.getAreas);
routes.get('/getareabycity/:cityId', areaController.getAreaByCityID)
module.exports = routes;