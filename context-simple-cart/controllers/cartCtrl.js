//cart is going to be stored completely on session
//data model Array of mongo _id
module.exports = {
  addToCart: (req, res) => {
    req.session.cart.push(req.params.id)
    res.status(201).json(req.session.cart)
  },
  getCart: (req, res) => {
    res.status(200).json(req.session.cart)
  },
  deleteItemFromCart: (req, res) => {
    req.session.cart = req.session.cart.filter((id) => {
      return id !== req.params.id
    })
    res.status(201).json(req.session.cart)
  }
}