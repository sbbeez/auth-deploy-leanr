const mongoose = require("mongoose");
const passportServices = require("../services/passport");
const passport = require("passport");
const Reward = require("../controllers/RewardController");

const requireAuth = passport.authenticate("jwt", { session: false });

module.exports = app => {
  app.get("/getRewards", requireAuth, Reward.getRewards);

  app.post("/addRewards", requireAuth, Reward.addRewards);
};
