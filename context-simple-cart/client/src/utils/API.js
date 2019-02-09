import axios from "axios";

export default {
  signup: (data) => {
    return axios.post("/api/user", data)
  },
  login: (userData) => {
    return axios.post("/api/user/login", userData)
  },
  update: (userData) => {
    return axios.put("/api/user", userData)
  },
  logout: () => {
    return axios.put("/api/user/logout")
  },
  session: () => {
    return axios.get("/api/user/session")
  },
  forgotPassword: (email) => {
    return axios.post("/api/reset/", {email})
  },
  checkToken: (token) => {
    return axios.get(`/api/reset/`, {
      params: {
        token
      }
    })
  },
  resetPassword (resetData) {
    return axios.put("/api/reset", resetData)
  },
  //product Methods  api/product
  getAllProducts () {
    return axios.get("/api/product")
  },
  
  //cart methods api/product api/product/:id
  getCart: () => {
    return axios.get("/api/cart")
  },
  addProductToCart: (productId) => {
    return axios.post(`/api/cart/${productId}`)
  },
  removeProductFromCart: (productId) => {
    return axios.delete(`/api/cart/${productId}`)
  },
}