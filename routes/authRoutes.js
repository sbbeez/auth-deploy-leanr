const Authentication = require("../controllers/AuthControllers");
const passportServices = require("../services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireCrendetials = passport.authenticate("local", { session: false });

module.exports = app => {

  app.get("/",(req,res)=>{
    res.send({message:"Working at every level"})
  })

  app.post("/signin", requireCrendetials, Authentication.signin)

  app.get("/getCredits",requireAuth, (req,res) => {
    res.send(req.user);
  })

  app.post("/signup", Authentication.signUp);
};
