const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const { gapi } = require("../../config");

const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");

const { Loader } = require("@googlemaps/js-api-loader");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    // const key = new Loader({
    //   apiKey: gapi,
    //   version: "weekly",
    // });
    return res.json(gapi);
  })
);

module.exports = router;
// router.post("/test", function (req, res) {
//   res.json({ requestBody: req.body });
// });
// router.get(
//   "/set-token-cookie",
//   asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: "demoUser",
//       },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
//   })
// );
// const { restoreUser } = require("../../utils/auth.js");
// router.get("/restore-user", restoreUser, (req, res) => {
//   return res.json(req.user);
// });
// const { requireAuth } = require("../../utils/auth.js");
// router.get("/require-auth", requireAuth, (req, res) => {
//   return res.json(req.user);
// });
