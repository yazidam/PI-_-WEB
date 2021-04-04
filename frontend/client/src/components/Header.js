import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1-removebg-preview.png';
import '../style/Header.css';
class Header extends Component {
  render() {
    return (
      <nav
        className="navbar sticky-top navbar-light navbar-expand-md "
        id="mainnav"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img id="logo" src={logo} alt="smart delivery"></img>
            <Link to="/" className="tohome">
              {' '}
              PI MERN Stack{' '}
            </Link>
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
            <ul className="nav navbar-nav  ml-auto">
              <li className="nav-item active">
                <Link className="nav-item nav-link" to="/home">
                  My Deliverys <span className="sr-only"></span>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-item nav-link" to="/map">
                  Go To Map <span className="sr-only"></span>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-item nav-link" to="/delivery">
                  Go To Delivery man <span className="sr-only"></span>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-item nav-link" to="/deliverymanipulation">
                  adminnnn <span className="sr-only"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
