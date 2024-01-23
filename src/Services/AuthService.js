import axios from "axios";
const API_URL = "http://localhost:7500/api/";

const signIn = (obj) => {
  return axios.post(API_URL + "loginuser", obj)
    .then(response => {
      if (response.data.tokens) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    })
  }

const signUp = (obj) => {
  return axios.post(API_URL + "registeruser", obj)
  .then(response => {    
    return response.data;
  })
}

const getCurrentUser = () =>{
  return JSON.parse(localStorage.getItem('user'));
}

const logout = () =>{
  localStorage.removeItem("user");
}
// 👇️ assign to variable
const AuthService = { signIn, signUp, getCurrentUser, logout };
export default AuthService;