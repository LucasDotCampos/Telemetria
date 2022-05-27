import axios from "axios";
const api = axios.create({
  baseURL:
    "http://170.10.0.66:8080/idw/rest/injet/monitorizacao/pam/telemetria",
});
export default api;
