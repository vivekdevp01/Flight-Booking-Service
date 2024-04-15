const {StatusCodes}=require('http-status-codes');
const {ErrorResponse}=require('../utils/common');
function validateCreateBooking(req,res,next){
    if(!req.body.flightId){
        ErrorResponse.message="Something went wrong";
        ErrorResponse.error={explanation:"something wrong with flightid"}
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    next();
}
module.exports={
    validateCreateBooking
}
