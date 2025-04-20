const routes=require("express").Router();
const favoriteController=require("../controllers/favoriteController")

routes.post("/add",favoriteController.addFavorite);
routes.get("/get",favoriteController.getallFavorite);

module.exports=routes;