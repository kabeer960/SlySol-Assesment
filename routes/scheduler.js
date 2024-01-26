const express = require("express");
const router = express.Router();
const { getBookings } = require('../controllers/scheduler')

router.get('/:date', getBookings);

module.exports = router