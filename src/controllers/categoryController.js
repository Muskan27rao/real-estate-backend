const categoryModel = require("../models/categoryModel")

const addCategory = async (req,res) => {
    try {
        const savedCategory = await categoryModel.create(req.body)
        res.status(201).json({
            message: "Category added successfully",
            data: savedCategory,
          });
    } catch (error) {
        res.status(501).json({
            message: error
        })
    }

}

const getCategory = async (req, res) => {
  try {
    const category = await categoryModel.find()
    res.status(200).json({
      message: "All category",
      data: category,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};




module.exports = {
    getCategory,
    addCategory
}