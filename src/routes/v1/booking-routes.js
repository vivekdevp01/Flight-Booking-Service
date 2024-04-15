const express=require('express');
const {BookingController}=require('../../controllers');
const {BookingMiddlewares}=require('../../middlewares');
const router=express.Router();
router.post('/',BookingMiddlewares.validateCreateBooking,
BookingController.createBooking);

module.exports=router;
