const { Booking } = require('../models');
const { Op } = require('sequelize');
const { handleResponse, handleError } = require("../utils/responses");

exports.getBookings = async (req, res) => {  
    const agent = req.agent;
    const param = req.params;
    const bookings = await Booking.findAll({
        where: {
            start_at: {
              [Op.lte]: param.date
            },
            finish_at: {
              [Op.gte]: param.date
            },
        },
    });
    handleResponse(res, {bookings: bookings})     
}
