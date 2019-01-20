import axios from "axios";

export default {
  signup: (data) => {
    return axios.post("/api/user", data)
  },
  login: (userData) => {
    return axios.post("/api/user/login", userData)
  },
  logout: () => {
  
  },
  update: (userData) => {
    return axios.put("/api/user", userData)
  }
}