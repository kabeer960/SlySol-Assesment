const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const { validateRequest } = require("../middlewares/validateRequest");
const { login } = require('../controllers/auth')

router.post(
  "/login",
  [
    body("email", "Email is not valid").notEmpty().withMessage("Email is required").if(body("email").notEmpty()).isEmail(),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  validateRequest,
  login

);

module.exports = router;
