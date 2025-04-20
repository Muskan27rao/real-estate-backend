const stateModel = require("../models/stateModel")

const addState = async (req,res) => {
    try {
        const addedState = await stateModel.create(req.body)
        res.status(201).json({
            message: "State added successfully",
            data: addedState,
        })
    } catch (error) {
        res.status(500).json({
            message: error,
          });
    }
}

const getAllStates = async (req, res) => {

    try{
        
        const states = await stateModel.find();
        res.status(200).json({
            message: "All states fetched successfully",
            data: states
        })

    }catch(err){

        res.status(500).json({
            message: err
        })

    }

}

module.exports = {
    addState,
    getAllStates

}