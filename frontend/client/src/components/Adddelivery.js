import React, { Component } from 'react';
import axios from 'axios';
import { setErrors } from '../ERRORS/setErrors';
export default class Adddelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      phone: '',
      from: '',
      to: '',
      errors: {},
    };
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  validate = (first_name, last_name, phone, from, to) => {
    const errors = setErrors(first_name, last_name, phone, from, to);
    this.setState({ errors: errors });
    return Object.values(errors).every((err) => err === '');
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { first_name, last_name, phone, from, to } = this.state;
    if (this.validate(first_name, last_name, phone, from, to)) {
      const data = {
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        from: from,
        to: to,
      };
      console.log(data);
      axios.post('http://localhost:4000/delivery/add', data).then((res) => {
        if (res.data.success) {
          console.log('Added');
          this.setState({
            first_name: '',
            last_name: '',
            phone: '',
            from: '',
            to: '',
          });
        }
      });
    }
  };
  render() {
    return (
      <div className="col-md-10 mt-3 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Create new bokk</h1>
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
            {this.state.errors.title && (
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
            <label>from</label>
            <input
              type="text"
              className="form-control"
              name="from"
              placeholder="Enter from"
              value={this.state.from}
              onChange={this.handleInputChange}
            />
            {this.state.errors.from && (
              <div className="text-danger">{this.state.errors.from}</div>
            )}
          </div>

          <div className="form-group">
            <label>to</label>
            <input
              type="text"
              className="form-control"
              name="to"
              placeholder="Enter to"
              value={this.state.to}
              onChange={this.handleInputChange}
            />
            {this.state.errors.to && (
              <div className="text-danger">{this.state.errors.to}</div>
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
