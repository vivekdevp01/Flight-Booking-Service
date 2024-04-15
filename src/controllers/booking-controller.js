const {BookingService}=require('../services');
const {StatusCodes}=require("http-status-codes");
const {SuccessResponse, ErrorResponse}=require('../utils/common');
async function createBooking(req,res){
    try{
      const booking=await BookingService.createBooking({
        //   userId:req.body.userId,
        //   totalCost:req.body.totalCost,
        //   status:req.body.status,
        flightId:req.body.flightId,
        userId:req.body.userId,
        noOfSeats:req.body.noOfSeats,

      });
      SuccessResponse.data=booking;
      return res
      .status(StatusCodes.CREATED)
      .json(SuccessResponse);
    }
    catch(error){
      ErrorResponse.error=error;
     return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse);
    }
} 
module.exports={
    createBooking
}
