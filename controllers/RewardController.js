const mongoose = require("mongoose");
const User = mongoose.model("users");
const Reward = mongoose.model("rewards");

exports.getRewards = (req, res) => {
  Reward.findOne({ _user: req.user.id }).then(reward =>
    res.send({ reward: reward.rewards })
  );
};

exports.addRewards = (req, res) => {
  Reward.updateOne(
    { _user: req.user.id },
    { $inc: { rewards: req.body.rewards } }
  ).then(() => {
    Reward.findOne({ _user: req.user.id }).then(reward => {
      res.send({ reward: reward.rewards });
    });
  });
};
