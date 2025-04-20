const propertyModel=require("../models/propertyModel");
const multer = require("multer");
const path = require("path");
const cloudinaryUtil = require("../utils/cloudinaryUtil");

const storage = multer.diskStorage({
    destination: "./uploads",
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

const upload = multer({
    storage: storage,
    //fileFilter:
  }).single("propertyImage");

const addProperty=async(req,res)=>{

    try{
        const savedProperty=await propertyModel.create(req.body);

        res.status(201).json({
            message:"Property Added Succesfully ...!",
            data:savedProperty
        })

    }
    catch(err){

        res.status(500).json({
            message:err.message,
        })

    }
}

const getAllProperty =async(req,res)=>{

    try{

        const getAllProperty=await propertyModel.find().populate("categoryId").populate("areaId").populate("cityId").populate("stateId").populate("userId");

        res.status(200).json({
            message:"Property Featched Succesfully ...!",
            data:getAllProperty
        })
    
    }

    catch(err){

        res.status.json(500)({
            message:err.message
        })
    }
}
const getSingleProperty =async(req,res)=>{

    try{
        const propertyId = req.params.propertyId

        const getSingleProperty=await propertyModel.findOne({_id:propertyId}).populate("categoryId").populate("areaId").populate("cityId").populate("stateId").populate("userId");

        res.status(200).json({
            message:"Single Property Featched Succesfully ...!",
            data:getSingleProperty
        })
    
    }

    catch(err){

        res.status.json(500)({
            message:err.message
        })
    }
}

const deleteProperty=async(req,res)=>{

    try{

        const deleteProperty=await propertyModel.findByIdAndDelete(req.params.id);
        res.status(204).json({
            message:"Property Deleted Sussefully ...!",
        })
     }
    catch(err){

            res.status(400).json({
                message:err.message,

            })
    }
}

const addPropertyWithFile = async (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        res.status(500).json({
          message: `add property with file user controller '${err.message}'`,
        });
      } else {
        // database data store
        //cloundinary
  
        const cloundinaryResponse = await cloudinaryUtil.uploadFileToCloudinary(req.file);
        console.log(cloundinaryResponse);
        console.log(req.body);
  
        //store data in database
        req.body.propertyImageURL = cloundinaryResponse.secure_url
        const savedProperty = await propertyModel.create(req.body);
  
        res.status(200).json({
          message: "property saved successfully",
          data: savedProperty
        });
      }
    });
  };
  

module.exports={
    addProperty,getAllProperty,deleteProperty,addPropertyWithFile,getSingleProperty
}