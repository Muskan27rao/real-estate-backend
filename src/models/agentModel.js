  const mongoose=require("mongoose");
const { schema } = require("./roleModel");

  const Schema=mongoose.Schema;

  const agentSchema=new schema({
    agentName:{
        type:String
    },
    licenseNo:{
        type:String
    },
    agencyName:{
        type:String
    },
    experienceYear:{
        type: Number
    },
    rating:{
        type: Number
        //double
    },

  })
  module.exports=("agent",agentSchema)