const verifyHeader = () =>{
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.tokens) {
      return { 'Authorization': user.tokens };       
    } else {
      return {};
    }
  }
  

  export default verifyHeader;