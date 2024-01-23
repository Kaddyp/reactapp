import axios from "axios";
import verifyHeader from './verifyHeader';
const API_URL = "http://localhost:7500/api/";

let options = {    
    headers: verifyHeader()
}


const getProtectedRoute = () => {
  return axios.get(API_URL + "protectedUser", options)
    .then(response => {
      return response.data;
    })
  }


// 👇️ assign to variable
const UserService = { getProtectedRoute };
export default UserService;