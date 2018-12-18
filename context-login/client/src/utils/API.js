import axios from "axios";

export default {
  signup: (data) => {
    return axios.post("/api/user", data)
  },
  login: () => {

  },
  logout: () => {
  
  }
}