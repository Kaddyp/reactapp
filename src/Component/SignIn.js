import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import AuthService from "../Services/AuthService";

/***********Initialise Functional Component React******************************************************/
class SignIn extends Component {
    constructor(props) {
        super(props);   
        this.state = {
          email: "",
          password: "", 
          redirect: null      
        };
      }

      onChangeHandler = (e) =>{
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      handleSignIn = (e) =>{
        e.preventDefault();
        let obj = {
            "email": this.state.email,
            "password": this.state.password
        }
        AuthService.signIn(obj).then(
          () => {
            this.setState({ redirect: "/profile" })
          },
          (error) => {
            console.log(error);
          }
        );
      }

  
    render() {
      if (this.state.redirect) {
          return <Navigate to={this.state.redirect} />
      }
        console.log(this.state);
        return(
            <div className='form-signin w-25 mx-auto' style={{paddingTop: '308px', paddingBottom: '308px'}}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label text-start">Email</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" onChange={this.onChangeHandler}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label text-start">Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={this.onChangeHandler}/>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit" onClick={this.handleSignIn}>Sign In</button>
                <hr />
                <button className="btn btn-warning w-100 py-2" type="button">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </button>
            </div>
        )
    }
}

export default SignIn;