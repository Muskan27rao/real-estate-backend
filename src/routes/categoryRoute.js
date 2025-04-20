const categoryController = require("../controllers/categoryController")
const routes = require("express").Router()

routes.post("/add",categoryController.addCategory)

routes.get("/get",categoryController.getCategory)


module.exports = routes