const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const { validateRequest } = require("../middlewares/validateRequest");
const { createBooking, deleteBooking } = require('../controllers/booking');

router.post(
    '/',
    [
        body("user_id").notEmpty().withMessage("User Id is required"),
        body("start_at").notEmpty().withMessage("Start Date is required"),
        body("finish_at").notEmpty().withMessage("Finish Date is required"),
    ],
    validateRequest,
    createBooking
);

router.delete(
    '/:id',
    deleteBooking
);

module.exports = router