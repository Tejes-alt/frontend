import axios from "axios"

const API = axios.create({
  baseURL: "https://backend-gateway-tduj.onrender.com/"
})

export default API