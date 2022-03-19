import React from "react";
import { Link } from "react-router-dom";
import "../../admin_webu/dist/css/adminlte.min.css";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "Jitendra",
      last_name: "Sahu ",
      password: "jitu@123#",
      mobile: "8887603331",
      email: "jitendrasahu17996@gmail.com",
      term_and_condition: true,
      msg: "Something Went wrong, please try again",
      msgStatus: false,
      msgClass: "alert-danger",
    };

    this.registrationInputHandle = this.registrationInputHandle.bind(this);
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
  }

  registrationInputHandle = (event) => {
    let name = event.target.name;
    return this.setState({ [name]: event.target.value });
  };

  handleRegistrationSubmit(e) {
    this.setState({ msgStatus: false });
    e.preventDefault();
    let url = `${window.$base_url}${window.$api.post.registration}`;
    window.$axios.post(url, this.state).then((res) => {
      this.setState({msgStatus: true});
      console.log(res);
      if (res.data.status === 200) {
        this.setState({ msgClass: "alert-success" });
        this.setState({ msg: "Registration successfully." });
      } else {
        this.setState({ msg: res.data.msg });
        this.setState({ msgClass: "alert-danger" });
      }
    });
  }

  renderSubmittedMsg(){
    if(this.state.msgStatus){
        return (
          <div className="row">
            <div className="col-sm-12">
              <div
                className={`alert ${this.state.msgClass}`}
                role="alert"
              >
                {this.state.msg}
              </div>
            </div>
          </div>
        );
    }
  }

  render() {
    return (
      <>
        <section className="vh-100 registration_backround">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black b_radius">
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Sign up
                        </p>
                        <form
                          className="mx-1 mx-md-4"
                          onSubmit={this.handleRegistrationSubmit}
                        >
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <input
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    className="form-control"
                                    value={this.state.first_name}
                                    onChange={this.registrationInputHandle}
                                  />
                                  <label
                                    className="form-label"
                                    htmlFor="firstName"
                                  >
                                    First Name
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <input
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                    className="form-control"
                                    value={this.state.last_name}
                                    onChange={this.registrationInputHandle}
                                  />
                                  <label
                                    className="form-label"
                                    htmlFor="lastName"
                                  >
                                    Last Name
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.registrationInputHandle}
                              />
                              <label className="form-label" htmlFor="email">
                                Your Email
                              </label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="number"
                                id="mobile"
                                name="mobile"
                                className="form-control"
                                value={this.state.mobile}
                                onChange={this.registrationInputHandle}
                              />
                              <label className="form-label" htmlFor="mobile">
                                Mobile
                              </label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.registrationInputHandle}
                              />
                              <label className="form-label" htmlFor="password">
                                Password
                              </label>
                            </div>
                          </div>
                          <div className="form-check justify-content-center mb-5">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value={this.state.term_and_condition}
                              id="term_and_condition"
                              name="term_and_condition"
                              checked={this.state.term_and_condition}
                              onChange={this.registrationInputHandle}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="term_and_condition"
                            >
                              I agree all statements in &nbsp;
                              <Link to="#">Terms of service</Link>
                            </label>
                          </div>
                         
                          { this.renderSubmittedMsg() }
                         

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg"
                            >
                              Register
                            </button>
                            &nbsp;&nbsp;
                            <Link
                              to="/login"
                              className="btn btn-warning btn-lg"
                            >
                              Sign In
                            </Link>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Register;
