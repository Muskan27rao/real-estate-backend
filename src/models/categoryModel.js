const mongoose = require("mongoose")

const Schema = mongoose.Schema

const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      description: {
        type: String,
        default: ''
      },
      status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
      }
},{
    timestamps:true
})

module.exports = mongoose.model("category",categorySchema)