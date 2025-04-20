const routes = require("express").Router()

const roleController = require("../controllers/roleController")

routes.get("/roles",roleController.getAllRoles)

routes.post("/role",roleController.addRole)

routes.delete("/role/:id",roleController.deleteRole)

routes.get("/role/:roleId", roleController.findRole)

module.exports = routes