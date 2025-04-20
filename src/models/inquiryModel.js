const mongoose=require("mongoose");
 
const Schema=mongoose.Schema;

const inquirySchema=new Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        
        type: String,
        unique: true
    },
    phoneNumber:{
        required: true,
        type: Number
    },
   message:{
     type:String
   },
    inquiryDate:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        enum:["Open","Resolved","Closed"],
        default:'Open'
    }

})
module.exports=mongoose.model("inquiry",inquirySchema);