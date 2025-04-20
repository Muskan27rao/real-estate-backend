const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const areaSchema = new Schema({
    name:{
        type: String
    },
    stateId:{
        type:Schema.Types.ObjectId,
        ref:'state'
    },
    cityId:{
        type:Schema.Types.ObjectId,
        ref:'city'
    }
    
},{
    timestamps: true
})
module.exports = mongoose.model('area', areaSchema);