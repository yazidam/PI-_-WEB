import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          PI MERN Stack
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                My Deliverys <span className="sr-only"></span>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/map">
                Go To Map <span className="sr-only"></span>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/delivery">
                Go To Delivery man <span className="sr-only"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
