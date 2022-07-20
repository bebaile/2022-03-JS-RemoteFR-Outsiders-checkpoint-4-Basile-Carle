import Axios from "axios";

const api = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

const dumbstring = "default";

export { api, dumbstring };
