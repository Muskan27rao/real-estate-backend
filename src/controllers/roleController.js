const roleModel = require("../models/roleModel")

const getAllRoles = async (req,res) => {

    const roles = await roleModel.find()

    res.json({
        message: "role fetched successfully",
        data:roles
    })
}

const addRole = async (req,res) => {
    const savedRole = await roleModel.create(req.body)

    res.json({
        message:"Role Created...",
        data: savedRole
    })
}

const deleteRole = async (req,res) => {
    const deletedRole  = await roleModel.findByIdAndDelete(req.params.id)

    res.json({
        message:"field deleted",
        data: deletedRole
    })
}

const findRole = async (req,res) => {
    const fetchedRole = await roleModel.findById(req.params.roleId)

    res.json({
        message:"Fetched0 sucessfully",
        data:fetchedRole
    })
}


module.exports = {
    getAllRoles,addRole, deleteRole, findRole
}