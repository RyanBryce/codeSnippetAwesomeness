// Require mongoose
console.log("what up from user...");
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the noteSchema with the schema object
var userSchema = new Schema({

  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profilePic: {
    type: String,
    required: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  resetPasswordToken: {
    type: String,
    required: false
  },
  resetPasswordExpires: {
    type: Date,
    required: false
  },
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order'
  }],
  addresses: [{
    type: Schema.Types.ObjectId,
    ref: 'Address'
  }]
  
});

// Create the Note model using the noteSchema
var User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;