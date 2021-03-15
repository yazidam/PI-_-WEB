import React, { Component } from 'react';
import axios from 'axios';
export default class Deliverydetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livrasion: {},
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:4000/delivery/dev/${id}`).then((res) => {
      if (res.data) {
        this.setState({
          livrasion: res.data.data,
        });
        console.log('kteb :', this.state.livrasion);
      }
    });
    console.log('giugiuyg');
  }

  render() {
    const { first_name, last_name, phone, from, to } = this.state.livrasion;
    return (
      <div>
        <h3>Detail PAGE</h3>

        <hr />
        <dl className="row">
          <dt className="col-sm-2">first_name</dt>
          <dd className="col-sm-10">{first_name}</dd>
          <dt className="col-sm-2">last_name</dt>
          <dd className="col-sm-10">{last_name}</dd>
          <dt className="col-sm-2">phone</dt>
          <dd className="col-sm-10">{phone}</dd>
          <dt className="col-sm-2">from</dt>
          <dd className="col-sm-10">{from}</dd>
          <dt className="col-sm-2">to</dt>
          <dd className="col-sm-10">{to}</dd>
        </dl>
      </div>
    );
  }
}
