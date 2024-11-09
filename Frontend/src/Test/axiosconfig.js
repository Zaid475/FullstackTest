import axios from "axios"

const backendurl="http://localhost:8000"

const api=axios.create({
baseURL:backendurl

})
export default api;