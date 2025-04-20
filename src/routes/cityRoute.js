const routes = require('express').Router();
const cityController = require('../controllers/cityController');


routes.post("/addcity", cityController.addCity);    

routes.get("/getallcities", cityController.getCities);

routes.get("/getcitiesbystate/:stateId", cityController.getCitiesByStateId)


module.exports = routes;