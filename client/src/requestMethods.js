import axios from "axios";

const BASE_URL = "https://e-commerce-mern-with-redux-api.onrender.com/api/";

const getToken = () => {
  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  //console.log("user: ", user);
  const currentUser = user && JSON.parse(user).currentUser;
  //console.log("currentUser: ", currentUser);
  const TOKEN = currentUser?.accessToken;
  //console.log("TOKEN: ", TOKEN);
  return TOKEN;
};

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${getToken()}`,
  },
});
