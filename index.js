const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const keys = require("./config/keys");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//Db set up
mongoose.connect(keys.mongoDbUri);


//App set up
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
require("./models/user");
require("./models/reward");
require("./routes/authRoutes")(app);
require("./routes/rewardRoutes")(app);

//sever set up
const PORT = process.env.PORT || 3090;
app.listen(PORT);
