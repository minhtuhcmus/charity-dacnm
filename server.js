const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const passport = require("passport");
const path = require("path");

// Body Parser Middleware:
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "client/build")))

// Passport Middleware:
app.use(passport.initialize());

// Connect To MongoDB:
mongoose.connect("mongodb://localhost:27017/test", function(err){
  if(err) {
      console.log("Error: Mongo Wasnt Connected because of: ", err);
  }
  else {
      console.log("MongoDB Connected");
  }
});

// Listening
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server Running on port ${port}`));