const express = require("express");
const router = express.Router();
const { getAdminAgents } = require('../controllers/agent')

router.get('/', getAdminAgents);

module.exports = router