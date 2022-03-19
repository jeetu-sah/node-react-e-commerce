import React from 'react';
import {Link} from 'react-router-dom';
import "../../admin_webu/dist/css/adminlte.min.css";

class Login extends React.Component{
    render (){
        return (
          <>
            <div className="container">
              <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-6 centered">
                  <div className="login-box">
                    <div className="login-logo">
                      <Link to="/login">
                        <b>Admin</b>LTE
                      </Link>
                    </div>
                    <div className="card">
                      <div className="card-body login-card-body">
                        <p className="login-box-msg">
                          Sign in to start your session
                        </p>

                        <form action="../../index3.html" method="post">
                          <div className="input-group mb-3">
                            <input
                              type="email"
                              name="email"
                              id="email"
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
                              type="password"
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
                            <i className="fab fa-facebook mr-2"></i> Sign in
                            using Facebook
                          </Link>

                          <Link to="#" className="btn btn-block btn-danger">
                            <i className="fab fa-google-plus mr-2"></i> Sign in
                            using Google+
                          </Link>
                        </div>

                        <p className="mb-1">
                          <a href="forgot-password.html">
                            I forgot my password
                          </a>
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

export default Login;