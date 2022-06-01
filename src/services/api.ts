import axios from "axios";
const api = (ip: string, port: string) => {
  return axios.create({
    baseURL: `http://${ip}:${port}/idw/rest/injet/monitorizacao/pam/telemetria`,
  });
};
export default api;
