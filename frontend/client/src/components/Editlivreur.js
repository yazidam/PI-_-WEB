import React, { Component } from 'react';
import Axios from 'axios';
import { setErrors1 } from '../ERRORS/setErrors1';
export default class Editlivreur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      phone: '',
      cin: '',
      availability: '',
      email: '',
      password: '',
      errors: {},
    };
  }
  validate = (
    first_name,
    last_name,
    phone,
    cin,
    availability,
    email,
    password
  ) => {
    const errors = setErrors1(
      first_name,
      last_name,
      phone,
      cin,
      availability,
      email,
      password
    );
    this.setState({ errors: errors });
    return Object.values(errors).every((err) => err === '');
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(`http://localhost:4000/livreur/livreur/${id}`).then((res) => {
      if (res.data) {
        this.setState({
          first_name: res.data.data.first_name,
          last_name: res.data.data.last_name,
          phone: res.data.data.phone,
          cin: res.data.data.cin,
          availability: res.data.data.availability,
          email: res.data.data.email,
          password: res.data.data.password,
        });
      }
    });
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const {
      first_name,
      last_name,
      phone,
      cin,
      availability,
      email,
      password,
    } = this.state;
    if (
      this.validate(
        first_name,
        last_name,
        phone,
        cin,
        availability,
        email,
        password
      )
    ) {
      const data = {
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        cin: cin,
        availability: availability,
        email: email,
        password: password,
      };
      console.log(data);
      Axios.patch(`http://localhost:4000/livreur/livreur/${id}`, data).then(
        (res) => {
          if (res.data.success) {
            alert('Edited successfully');
          }
        }
      );
    }
  };
  render() {
    return (
      <div className="col-md-10 mt-3 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Create</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group">
            <label>first_name</label>
            <input
              type="text"
              className="form-control"
              name="first_name"
              placeholder="Enter first_name"
              value={this.state.first_name}
              onChange={this.handleInputChange}
            />
            {this.state.errors.first_name && (
              <div className="text-danger">{this.state.errors.first_name}</div>
            )}
          </div>

          <div className="form-group">
            <label>last_name</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              placeholder="Enter last_name"
              value={this.state.last_name}
              onChange={this.handleInputChange}
            />
            {this.state.errors.last_name && (
              <div className="text-danger">{this.state.errors.last_name}</div>
            )}
          </div>

          <div className="form-group">
            <label>phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="Enter phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
            {this.state.errors.phone && (
              <div className="text-danger">{this.state.errors.phone}</div>
            )}
          </div>

          <div className="form-group">
            <label>cin</label>
            <input
              type="text"
              className="form-control"
              name="cin"
              placeholder="Enter cin"
              value={this.state.cin}
              onChange={this.handleInputChange}
            />
            {this.state.errors.cin && (
              <div className="text-danger">{this.state.errors.cin}</div>
            )}
          </div>
          <div className="form-group">
            <label>availability</label>
            <input
              type="text"
              className="form-control"
              name="availability"
              placeholder="Enter availability"
              value={this.state.availability}
              onChange={this.handleInputChange}
            />
            {this.state.errors.availability && (
              <div className="text-danger">
                {this.state.errors.availability}
              </div>
            )}
          </div>

          <div className="form-group">
            <label>email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            {this.state.errors.email && (
              <div className="text-danger">{this.state.errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <label>password</label>
            <input
              type="text"
              className="form-control"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            {this.state.errors.password && (
              <div className="text-danger">{this.state.errors.password}</div>
            )}
          </div>

          {/* <a href="/" className="btn btn-success" onClick={this.onSubmit}>
            &nbsp;Submit
          </a> */}
          <button
            className="btn btn-success"
            type="submit"
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp;Submit
          </button>
        </form>
      </div>
    );
  }
}
