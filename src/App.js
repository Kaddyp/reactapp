import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AuthService from "./Services/AuthService";
import Home from './Component/Home';
import SignIn from './Component/SignIn';
import Profile from './Component/Profile';
import Register from './Component/Register';
import UserDashboard from './Component/UserDashboard';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentUser: undefined
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user    
      });
    }  
  }

  logoutHandler(){
    AuthService.logout();
    this.setState({
      currentUser: undefined
    });
  }

  render(){
    const { currentUser } = this.state;
    return (
      <div className="container-fluid text-bg-dark"> 
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Demo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">                        
                            {currentUser && (
                              <li className="nav-item">
                                <Link to={"/user"} className="nav-link">
                                  User Dashboard
                                </Link>
                              </li>
                            )} 

                            {currentUser ? (
                                        <div className="navbar-nav ml-auto">
                                          <li className="nav-item">
                                            <Link to={"/profile"} className="nav-link">
                                              {currentUser.userName}
                                            </Link>
                                          </li>
                                          <li className="nav-item">
                                            <a href="/" className="nav-link" onClick={this.logoutHandler}>
                                              Logout
                                            </a>
                                          </li>
                                        </div>
                                      ) : (
                                        <div className="navbar-nav ml-auto">
                                          <li className="nav-item">
                                            <Link to={"/signIn"} className="nav-link">
                                              SignIn
                                            </Link>
                                          </li>

                                          <li className="nav-item">
                                            <Link to={"/register"} className="nav-link">
                                              Sign Up
                                            </Link>
                                          </li>
                                        </div>
                                      )}

                        </ul>               
                    </div>
                </div>
                
            </nav>
  
            <Routes>           
              <Route exact path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} /> 
              <Route path="/signIn" element={<SignIn />} />        
              <Route path="/register" element={<Register />} /> 
              <Route path="/user" element={<UserDashboard />} /> 
            </Routes>
  
          <Footer />  
      </div>
    );
  }
}

export default App;