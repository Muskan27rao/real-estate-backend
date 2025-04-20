const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const stateSchema = new Schema({
    name:{
        required:true,
        type: String,
        unique: true
    }
})

module.exports = mongoose.model("state",stateSchema)