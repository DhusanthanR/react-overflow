import React, { Component } from "react";
import { Link } from "react-router-dom";
import Undraw from "react-undraw";
import "./navbar.css";
export default class Navbar extends Component {
  constructor() {
    super();
  //   console.log(localStorage)
  // }
  }
  logOut=()=>{
    localStorage.removeItem("token")
    console.log(localStorage)
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light">
          <h3 className="ml-5">
            {localStorage.getItem("email").slice(0, -10)}
          </h3>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <h2 style={{ color: "black" }}> &#x2630; </h2>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/home/question">
                Question
                </Link>
              </li>
              <li className="nav-item">
                <input className="nav-link" type="search" placeholder="Search"/>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={this.logOut}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
