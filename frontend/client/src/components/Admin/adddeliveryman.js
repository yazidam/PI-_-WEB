import React, { Component } from 'react';
import Axios from 'axios';
import { setErrors } from '../../ERRORS/setErrors';
import axios from 'axios';
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import Select from 'react-select';
export default class adddeliveryman extends Component {
  constructor(props) {
    super(props);
    // console.log('fghfdgdfb:', this.props.jj);
    this.state = {
      first_name: '',
      last_name: '',
      phone: '',
      from: '',
      to: '',
      delivery_man: '',
      tablivreur: [],
      jj: [],
      yazid: [],
      selectedoption: '',
      selectoption: [],
      errors: {},
    };
  }
  // sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
  validate = (first_name, last_name, phone, from, to, delivery_man) => {
    const errors = setErrors(
      first_name,
      last_name,
      phone,
      from,
      to,
      delivery_man
    );
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
    this.getname();
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
    const { first_name, last_name, phone, from, to, delivery_man } = this.state;
    if (this.validate(first_name, last_name, phone, from, to, delivery_man)) {
      const data = {
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        from: from,
        to: to,
        delivery_man: this.state.delivery_man.value,
      };
      console.log(data);
      Axios.post(`http://localhost:4000/admindelll/add`, data).then((res) => {
        if (res.data.success) {
          alert('Edited successfully');
        }
      });
    }
  };
  getname() {
    axios.get('http://localhost:4000/livreur/firstname').then((res) => {
      // this.setState({
      //   jj: res.data.data,
      //   // count: res.data.data.length,
      // });
      // this.state.jj.map((x) => {
      //   console.log(x);
      // });
      // this.setState((prevState) => ({
      //   yazid: [...prevState.yazid, this.state.jj],
      // }));
      // console.log('table nom :', this.state.jj);
      // console.log('table nom 2 :', this.state.yazid);
      if (res.data) {
        const data = res.data.data;

        const options = data.map((x) => ({
          value: x.first_name,
          label: x.first_name,
        }));
        console.log(data);
        console.log(options);
        this.setState({
          selectoption: options,
        });
      }
    });
  }
  handelchange = (delivery_man) => {
    this.setState({ delivery_man });
    console.log('chniya 3mlt select :', delivery_man.value);
  };
  render() {
    return (
      <div className="col-md-10 mt-3 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Add delivery man </h1>
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
              //   onChange={this.handleInputChange}
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
              //   onChange={this.handleInputChange}
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
              //   onChange={this.handleInputChange}
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
              //   onChange={this.handleInputChange}
            />
            {this.state.errors.to && (
              <div className="text-danger">{this.state.errors.to}</div>
            )}
          </div>
          {/* <div className="form-group">
            <label>delivery_man</label>
            <input
              type="text"
              className="form-control"
              name="delivery_man"
              placeholder="Enter delivery_man"
              value={this.state.jj}
              onChange={this.handleInputChange}
              //value={this.state.jj}
            />
            {this.state.errors.delivery_man && (
              <div className="text-danger">
                {this.state.errors.delivery_man}
              </div>
            )}
          </div> */}
          <label>delivery_man</label>
          <br />

          <Select
            value={this.state.delivery_man}
            options={this.state.selectoption}
            name="delivery_man"
            onChange={this.handelchange}
          />

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
