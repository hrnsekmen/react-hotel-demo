import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/"></Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <TiThMenu className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">
                <span>
                  <FaReact /> React Hotel
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
