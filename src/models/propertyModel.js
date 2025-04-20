const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const propertySchema=new Schema({

    propertyName:{
        type:String,
        required:true,
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:"category"
    },
    basePrice:{
        type:Number,
        required:true
    },
    address:{
        type:String,

    },
    stateId:{
        type:Schema.Types.ObjectId,
        ref:"state",
    },
    cityId:{
        type:Schema.Types.ObjectId,
        ref:"city",

    },
    areaId:{
        type:Schema.Types.ObjectId,
        ref:"area",
    },
    
    nearbyLandmark:{
        type: String,
    },
    googleMapLink:{
        type: String,
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user"
    
    },
    builtUpArea:{
        type:Number,
    },
    carpetArea:{
        type:Number,
    },
    
    bedrooms:{
        type:Number,
    },
    bathrooms:{
        type:Number,
    },
    balconies:{
        type:Number
    },
    furnishingStatus:{
        type:String,
        enum:["Furnished","Semi-Furnished","Unfurnished"],
    },
    propertyAge:{
        type:Number
    },
    facingDirection:{
        type:String,
        enum:["north","south","east","west"]
    },
    parkingSlot:{
        type:Number,
    },
    propertyImageURL:{
        type:String,
    }

},{
    timestamps:true
})

module.exports=mongoose.model("property",propertySchema);