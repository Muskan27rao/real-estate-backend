const routes=require('express').Router();
const inquiryController=require('../controllers/inquiryController');

routes.post('/add',inquiryController.addInquiry);
routes.get('/get',inquiryController.getInquiry);

module.exports=routes;