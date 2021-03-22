import React, { Component } from "react";
import Inputbox from "../materialui/inputbox";
import Button from "../materialui/button";
import Snackbar from "../materialui/snackbarui";
import Slide from "@material-ui/core/Slide";
import { Redirect } from "react-router-dom";
import Undraw from "react-undraw";
import "./login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = false;
    if (token == null) {
      loggedIn = true;
    }
    this.state = {
      email: "",
      password: "",
      open: false,
      loggedIn
    };
  }

  loginData = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  isClicked = () => {
    if (this.state.email && this.state.password) {
      //  this.props.history.push(`/home`)
      this.setState({
        loggedIn: true
      });
      localStorage.setItem("token", "get");
      localStorage.setItem("email", this.state.email);
      console.log(localStorage);
    } else {
      this.setState({
        open: true
      });
    }
  };
  snackClose = () => {
    this.setState({
      open: false
    });
  };
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="login-content">
        <div className="container mainContent">
          <div className="row centerContent">
            <div className="form col-md-4">
              <h1 className="text-center">Login</h1>
              <div className="form-content mt-4">
                <Inputbox
                  className="mb-3"
                  lable="E-mail"
                  type="email"
                  id="email"
                  name="email"
                  setData={this.loginData}
                />
                <Inputbox
                  className="mb-3 "
                  lable="Password"
                  type="password"
                  id="password"
                  name="password"
                  setData={this.loginData}
                />
                <Button name="Submit" onclick={this.isClicked} />
              </div>
              <div className="mt-3">
                <h4 className="text-center">or</h4>
                <div className="d-flex mt-3 justify-content-center">
                  <button className="btn  btn-danger">Google</button>
                  <button className="btn  btn-primary">FaceBook</button>
                </div>
              </div>
            </div>
            <div className="col-md-8 leftContent">
            
            </div>
          </div>
        </div>
        <Snackbar
          open={this.state.open}
          close={this.snackClose}
          message="Login failed"
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        />
      </div>
    );
  }
}
export default Login;
