const cloundinary = require("cloudinary").v2;


const uploadFileToCloudinary = async (file) => {

    //conif
        cloundinary.config({
        cloud_name:"djgk66jji",
        api_key:"975526958172616",
        api_secret:"q1RrpqGCYt_TZka5HdZJ9kO_PsU"
    })

    const cloundinaryResponse = await cloundinary.uploader.upload(file.path);
    return cloundinaryResponse;

};
module.exports = {
    uploadFileToCloudinary
}