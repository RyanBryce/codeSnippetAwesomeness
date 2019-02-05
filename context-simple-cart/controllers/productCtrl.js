//product data model
// {
//   productName: String,
//   price: Number,
//   productImg: String
// }
var db = require('../models');
module.exports = {
  createProduct(req, res){
    db.Product.create(req.body)
    .then((product) => {
      res.status(200).json({product})
    })
    .catch((err) => {
      console.log(err);
      res.status(409).json(err)
    })
  },
  getAllProducts(req, res){
    db.Product.find({})
    .then((product) => {
        res.status(200).json(product)
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json(err)
      })
  },
  getProductById (req, res){
    db.Product.findById(req.params.id)
    .then((product) => {
      res.status(200).json(product)
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json(err)
    })
  },
  deleteProduct(req, res){
    db.Product.findByIdAndDelete(req.params.id)
    .then((deletedProd) => {
      res.status(200).json(deletedProd)
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json(err)
    })
  },
  updateProduct(req, res){
    db.Product.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body
      },
      {
        new: true
      }
    )
    .then((updatedProduct) => {
      res.status(200).json(updatedProduct)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err)
    })
  }
}