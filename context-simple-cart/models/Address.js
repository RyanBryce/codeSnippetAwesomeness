// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the noteSchema with the schema object
var AdressSchema = new Schema({
  address: {
    type: String,
    required: true,
    unique: true
  },
  //appartment number
  aptNumber: {
    type: String,
    required: false,
    unique: true
  },
  city: {
    type: String,
    required: true,
    unique: true
  },
  country: {
    type: String,
    required: true,
    unique: true
  },
  state: {
    type: String,
    required: true,
    unique: true
  },
  zipcode:{
    type: Number,
    required: true,
    unique: true,
    min: 5,
    max: 9
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
});

// Create the Note model using the noteSchema
var Address = mongoose.model("Address", AdressSchema);

// Export the Adress model
module.exports = Address;