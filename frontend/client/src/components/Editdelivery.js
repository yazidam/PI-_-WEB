import React, { Component } from 'react';
import Axios from 'axios';
import { setErrors } from '../ERRORS/setErrors';
export default class Editdelivery extends Component {
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
  validate = (first_name, last_name, phone, from, to) => {
    const errors = setErrors(first_name, last_name, phone, from, to);
    this.setState({ errors: errors });
    return Object.values(errors).every((err) => err === '');
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(`http://localhost:4000/delivery/dev/${id}`).then((res) => {
      if (res.data) {
        this.setState({
          first_name: res.data.data.first_name,
          last_name: res.data.data.last_name,
          phone: res.data.data.phone,
          from: res.data.data.from,
          to: res.data.data.to,
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
      Axios.patch(`http://localhost:4000/delivery/dev/${id}`, data).then(
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
        <h1 className="h3 mb-3 font-weight-normal">Edit book</h1>
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
