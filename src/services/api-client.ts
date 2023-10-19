import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "05d9746639cb46379253423501ce1e3c",
  },
});
