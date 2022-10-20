import axios from "axios";

const URL = 'https://s-trip.herokuapp.com/users'

export const API = axios.create({
  baseURL: URL,
  headers: {
    ContentType: "application/json",
  },
});

API.interceptors.request.use(async (req) => {
  req.headers["Authorization"] = "Bearer " + localStorage.getItem("jwt-token");
  return req;
});
