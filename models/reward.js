const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rewardSchema = new Schema({
  rewards: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});
const RewardModel = mongoose.model("rewards", rewardSchema);

module.exports = RewardModel;
