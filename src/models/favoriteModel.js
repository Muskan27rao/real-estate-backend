const mongoose = require('mongoose');

const Schema=mongoose.Schema

const favoriteSchema = new mongoose.Schema({
    favoriteName: {
        type: String,
        
    },
    userId: {
        type:Schema.Types.ObjectId,
        ref: "user"
    },
    propertyId: {
        type:Schema.Types.ObjectId,
        ref: "property"
    },
    addedDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("favorite", favoriteSchema);
