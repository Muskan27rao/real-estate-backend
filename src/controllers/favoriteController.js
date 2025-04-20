const favoriteModel=require("../models/favoriteModel");

const addFavorite=async (req,res) => {
    try{
        const savedFavorite=await favoriteModel.create(req.body);
        res.status(201).json({
        message:"Favorite Saved Sucessfully",
        data: savedFavorite
    })
    }catch{
        res.status(500).json({message:err})
    }
};
const getallFavorite =async (req,res) => {
    try{
        const favorite=await favoriteModel.find();
        res.status(201).json({
            message:"getallFavorite",
            data: favorite
        });
    }catch{
        res.status(500).json({message:err});
    }
};
module.exports={
    addFavorite,getallFavorite
}