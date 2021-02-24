const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { validateSignup } = require("../../utils/validation");
const { User } = require("../../db/models");

router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username, firstName, lastName } = req.body;
    const user = await User.signup({
      email,
      username,
      password,
      firstName,
      lastName,
    });
    await setTokenCookie(res, user);
    return res.json({
      user,
    });
  })
);

module.exports = router;
