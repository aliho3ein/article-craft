import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5003/articleCraft/api",
  timeout: 8000,
});

export default instance;
