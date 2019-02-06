const express = require("express");
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
// Define middleware here
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

function userAndCartSetup(req, res, next) {
  if (!req.session.user) {
    req.session.user = {
      _id: null,
      name: '',
      username: '',
      email: '',
      profilePic: null,
      loggedIn: false,
    }
    //NOTE: not sure why i have this here again... maybe i should comment more :?
    req.session.user.loggedIn = false;
  }
  if (!req.session.cart) {
    req.session.cart = []
  }
  if (!req.session.address) {
    req.session.address = {
      _id: null
    }
  }
  next()
}
app.use(userAndCartSetup)

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/contextSimpleCart");
// Send every other request to the React app
// Define any API routes before this runs
app.use(require('./routes'))
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
