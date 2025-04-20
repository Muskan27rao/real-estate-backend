const propertyController = require("../controllers/propertyController")
const routes = require("express").Router()

routes.post("/add", propertyController.addProperty)

routes.get("/getall" , propertyController.getAllProperty)

routes.get("/getsingleproperty/:propertyId", propertyController.getSingleProperty)

routes.delete("/drop", propertyController.deleteProperty)

routes.post('/addWithFile', propertyController.addPropertyWithFile);

module.exports = routes