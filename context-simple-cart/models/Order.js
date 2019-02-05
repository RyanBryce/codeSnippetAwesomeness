// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the noteSchema with the schema object
var orderSchema = new Schema({

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }],
  address: {
    type: Schema.Types.ObjectId,
    ref: 'Address'
  }
});

// Create the Note model using the noteSchema
var Order = mongoose.model("Order", orderSchema);

// Export the Orders model
module.exports = Order;