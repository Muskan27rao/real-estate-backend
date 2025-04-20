const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName:{
        required: true,
        type: String
    },
    lastName:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String,
        unique: true
    },
    contact:{
        required: true,
        type: Number
    },
    password:{
        required: true,
        type: String
    },
    gender:{
        required: true,
        enum: ["male","female","other"],
        type: String
        
    },
    status:{
        type: Boolean,
        default: true,
        
    },
    
    roleId:{
        type:Schema.Types.ObjectId,
        ref:"roles"
    }
},{
    timestamps: true
})

module.exports = mongoose.model("user",userSchema);