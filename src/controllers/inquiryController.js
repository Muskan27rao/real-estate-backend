const inquiryModel=require("../models/inquiryModel");

const addInquiry = async (req,res) => {
    try {
        const savedCategory = await inquiryModel.create(req.body)
        res.status(201).json({
            message: "Inquiry added successfully",
            data: savedCategory,
          });
    } catch (error) {
        res.status(501).json({
            message: error
        })
    }

}

const getInquiry= async (req, res) => {
  try {
    const category = await inquiryModel.find()
    res.status(200).json({
      message: "All inquiry",
      data: category,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = {
   addInquiry,
   getInquiry
}