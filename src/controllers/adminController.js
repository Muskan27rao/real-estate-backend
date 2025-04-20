const adminModel = require("../models/adminModel")

const addAdmin = async (req,res) => {
    try {
        const addedState = await stateModel.create(req.body)
        res.status(201).json({
            message: "Admin added successfully",
            data: addedState,
        })
    } catch (error) {
        res.status(500).json({
            message: error,
          });
    }
}

const getAllAdmin = async (req, res) => {

    try{
        
        const states = await stateModel.find();
        res.status(200).json({
            message: "All Admin fetched successfully",
            data: states
        })

    }catch(err){

        res.status(500).json({
            message: err
        })

    }

}

module.exports = {
    addAdmin,
    getAllAdmin

}