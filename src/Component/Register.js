import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from "../Services/AuthService";

/***********Initialise Class Component React******************************************************/
class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
          fname: "",
          lname: "",
          email: "",
          custid: "",
          password: "",
          confirmPassword: "",
          redirect: null,
        }
    }
    onChangeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSignUp = (e) =>{
        e.preventDefault();
        let obj = {
          fname: this.state.fname,
          lname: this.state.lname,
          email: this.state.email,
          custid: this.state.custid,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword
        }

        AuthService.signUp(obj).then(
          () => {
            this.setState({ redirect: "/signIn" });        
          },
          (error) => {
            console.log(error);
          }
        );
      }

    render(){
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect} />
        }

        return(
            <div className='form-signin w-25 mx-auto' style={{paddingTop: '136px', paddingBottom: '136px'}}>
                    <div className="mb-3">
                        <label htmlFor="fname" className="form-label text-start">First Name</label>
                        <input type="text" className="form-control" name="fname" id="fname" placeholder="First Name" onChange={this.onChangeHandler}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lname" className="form-label text-start">Last Name</label>
                        <input type="text" className="form-control" name="lname" id="lname" placeholder="Last Name" onChange={this.onChangeHandler}/>
                    </div>               
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-start">Email</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" onChange={this.onChangeHandler}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="custid" className="form-label text-start">Customer Id</label>
                        <input type="text" className="form-control" name="custid" id="custid" placeholder="7775060244" onChange={this.onChangeHandler}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label text-start">Password</label>
                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={this.onChangeHandler}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label text-start">Confirm Password</label>
                        <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" onChange={this.onChangeHandler}/>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit" onClick={this.handleSignUp}>Sign Up</button>
                   
                </div>
        )
    }    
}

export default Register;