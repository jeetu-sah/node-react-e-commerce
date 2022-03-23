import React from "react";
import { Link } from "react-router-dom";
import "../../admin_webu/dist/css/adminlte.min.css";

class Login extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-6 centered">
              <div className="login-box">
                <div className="login-logo">
                  <h2>Welcome to admin dashboard</h2>
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
