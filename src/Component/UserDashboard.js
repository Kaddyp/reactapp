import React, { Component } from 'react';
import { Link } from "react-router-dom";
import UserService from '../Services/UserService';

export default class UserDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: "",
            user: undefined
        };
    }

    componentDidMount() {
        UserService.getProtectedRoute().then(
          response => {
            this.setState({
                message: response.message,
                user: response.user
            });
          },
          (error) => {
            console.log(error);
            this.setState({
                message: error.response.statusText + ` User, SinIn again!`, 
                user: undefined
            });
          }
        );
      }

    render(){
        const {message, user} = this.state;
        return(
            <div className="container" style={{paddingTop: '343px', paddingBottom: '343px'}}>
                 <div className="card">
                    <div className="card-body">
                        <h3 className=''>User Dashboard</h3>
                        <p>{message}</p>             
                        {user ? (                    
                            <p>
                                <strong>{user.email}</strong> and expired at {user.exp}
                            </p>                
                        ):(
                            <button className='btn btn-primary'>
                                <Link to={"/signIn"} className="nav-link">
                                    SignIn
                                </Link>
                            </button>
                        )
                        } 
                    </div>  
                </div>          
            </div>
        )
    }
}