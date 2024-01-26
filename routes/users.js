const express = require("express");
const router = express.Router();
const {  getUsersofAgent } = require('../controllers/user')

router.get('/', getUsersofAgent);

module.exports = router