const express = require("express");

const app = express();

app.get("/", (req,res)=>{
  res.send({message:"hey there welcome to the world"});
});

const PORT = process.env.PORT || 3000
app.listen(PORT);
