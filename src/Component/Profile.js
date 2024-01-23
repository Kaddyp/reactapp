import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from "../Services/AuthService";

/***********Initialise Class Component React******************************************************/
export default class Profile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          redirect: null,
          isLoaded : false,
          currentUser: { email: "" }
        };
         // This binding is necessary to make `this` work in the callback
        this.logoutHandler = this.logoutHandler.bind(this);
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({ redirect: "/" });
        this.setState({ currentUser: currentUser, isLoaded : true })
    }
      

    logoutHandler (){
        this.setState({ redirect: "/" })
        AuthService.logout();
    }

    render(){
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect} />
        }
      
          const { currentUser } = this.state;
        return(
            <div className='container' style={{paddingTop: '343px', paddingBottom: '343px'}}>
                <div className="card">
                    <div className="card-body">
                    {
                    (this.state.isLoaded) ?
                    <div>
                            <h5 className="card-title">{currentUser.userName} Logged In!</h5>
                
                            <p className="card-text">
                                <strong>Verified Token:</strong>{" "}
                                {currentUser.tokens.substring(0, 20)} ...{" "}
                                {currentUser.tokens.substr(currentUser.tokens.length - 20)}
                            </p>
                            <button className='btn btn-success' onClick={this.logoutHandler}>Logout</button> 
                    </div>
                    :
                    null
                    } 
                    </div>               
                </div>
            </div>
            
        )
    }
}
