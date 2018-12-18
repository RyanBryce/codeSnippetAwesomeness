const express = require("express");
const path = require("path");
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors())

app.use(session({
  secret: process.env.SESSIONSECRET,
  resave: false,
  saveUninitialized: true
}));

function userSetup(req, res, next) {
  if (!req.session.user) {
    req.session.user = {
      id: null,
      name: '',
      username: '',
      email: '',
      profilePic: null,
      loggedIn: false,
    }
    req.session.user.loggedIn = false;
  }
  next()
}
app.use(userSetup)

// Define middleware here
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/users';

mongoose.connect(MONGODB_URI);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
