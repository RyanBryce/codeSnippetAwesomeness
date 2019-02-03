// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the noteSchema with the schema object
var productSchema = new Schema({

  productName: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true,
    unique: true
  },
  //productImg will be getting replaced by s3 bucket
  productImg: {
    type: String,
    required: true
  },
});

// Create the Note model using the noteSchema
var Products = mongoose.model("Products", productSchema);

// Export the Product model
module.exports = Products;