import React from 'react';
import {Link} from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { Redirect, Route } from "react-router";
import Home from "../front/Home";


import "../../admin_webu/dist/css/adminlte.min.css";

class Login extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      password: "jitu@123#",
      email: "jitendrasahu17996@gmail.com",
      remember: true,
      msg: "Something Went wrong, please try again",
      msgStatus: false,
      msgClass: "alert-danger",
      redirectDashboard:false,

    };
  }

  loginInputHandle = (e) => {
    let name = e.target.name;
    return this.setState({ [name]: e.target.value });
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();
    let loginUrl = `${window.$base_url}${window.$api.post.login}`;
        
          window.$axios.post(loginUrl, this.state).then((res) => {
            if (res.data.status === 200) {
                console.log("Login successfully") 
              //console.log(res.data.status);
               this.setState({ redirectDashboard: true });
              
            } else {
               
            } 

            // if (res.data.status === 200) {
            //   this.setState({ msgClass: "alert-success" });
            //   this.setState({ msg: "Registration successfully." });
            // } else {
            //   this.setState({ msg: res.data.msg });
            //   this.setState({ msgClass: "alert-danger" });
            // }
          });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-6 centered">
              <div className="login-box">
                <div className="login-logo">
                  {this.state.redirectDashboard === true ? (
                    <Navigate to="/admin/dashboard"></Navigate>
                  ) : (
                    ""
                  )}
                  <Link to="/login">
                    <b>Admin</b>LTE
                  </Link>
                </div>
                <div className="card">
                  <div className="card-body login-card-body">
                    <p className="login-box-msg">
                      Sign in to start your session
                    </p>

                    <form onSubmit={this.handleLoginSubmit} method="POST">
                      <div className="input-group mb-3">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={this.state.email}
                          onChange={this.loginInputHandle}
                          className="form-control"
                          placeholder="Email"
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-envelope"></span>
                          </div>
                        </div>
                      </div>
                      <div className="input-group mb-3">
                        <input
                          name="password"
                          id="password"
                          type="text"
                          value={this.state.password}
                          onChange={this.loginInputHandle}
                          className="form-control"
                          placeholder="Password"
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-lock"></span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-8">
                          <div className="icheck-primary">
                            <input
                              type="checkbox"
                              id="remember"
                              name="remember"
                              checked={this.state.remember}
                              onChange={this.loginInputHandle}
                            />
                            &nbsp;&nbsp;
                            <label htmlFor="remember">Remember Me</label>
                          </div>
                        </div>

                        <div className="col-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                          >
                            Sign In
                          </button>
                        </div>
                      </div>
                    </form>

                    <div className="social-auth-links text-center mb-3">
                      <p>- OR -</p>
                      <Link to="#" className="btn btn-block btn-primary">
                        <i className="fab fa-facebook mr-2"></i> Sign in using
                        Facebook
                      </Link>

                      <Link to="#" className="btn btn-block btn-danger">
                        <i className="fab fa-google-plus mr-2"></i> Sign in
                        using Google+
                      </Link>
                    </div>

                    <p className="mb-1">
                      <a href="forgot-password.html">I forgot my password</a>
                    </p>
                    <p className="mb-0">
                      <Link to="/register" className="text-center">
                        Register a new membership
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </>
    );
  }
}

export default (Login);