const { Booking } = require('../models');
const { handleResponse, handleError } = require("../utils/responses");


exports.createBooking = async (req, res) => {  
    const agent = req.agent;
    const body = req.body;
    if(agent.role === "Admin"){
        const booking = await Booking.create({
            user_id: body.user_id,
            agent_id: agent.id,
            start_at: body.start_at,
            finish_at: body.finish_at
        });
        handleResponse(res, {booking: booking})
    }else{
        return handleError(res, "You are not Admin Agent.", 404);
    }
          
}

exports.deleteBooking = async (req, res) => {  
    const agent = req.agent;
    const param = req.params;
    if(agent.role === "Admin"){
        const booking = await Booking.findOne({
            where: {id: param.id}
        });
        if(booking){
            const deleteBooking = await Booking.destroy({
                where: {id: param.id}
            });
            handleResponse(res, {message: "Booking Deleted Successfully"})
        }else{
            return handleError(res, "Booking not Founded", 404);
        }
        
    }else{
        return handleError(res, "You are not Admin Agent.", 404);
    }
          
}