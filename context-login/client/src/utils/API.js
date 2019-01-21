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
  }
}