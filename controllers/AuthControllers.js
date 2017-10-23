const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");
const jwt = require("jwt-simple");
const Reward = mongoose.model("rewards");

const generateToken = user => {
  return jwt.encode({ sub: user.id }, keys.jwtSceretDecoder);
};

exports.signUp = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "Please provide both email id and password" });
  }

  User.findOne({ email: email }, (err, existingUser) => {
    if (existingUser) {
      return res.send({ error: "This email id is already taken" });
    }

    new User(req.body).save().then(user => {
      new Reward({ rewards: 0, _user: user.id })
        .save()
        .then(reward => res.json({ token: generateToken(user) }));
    });
  });
};

exports.signin = (req, res, next) => {
  res.send({ token: generateToken(req.user) });
};
