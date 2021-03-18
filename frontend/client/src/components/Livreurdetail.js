import React, { Component } from 'react';
import axios from 'axios';
export default class Livreurdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livreeur: {},
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:4000/livreur/livreur/${id}`).then((res) => {
      if (res.data) {
        this.setState({
          livreeur: res.data.data,
        });
        console.log('one :', this.state.livreeur);
      }
    });
    //console.log('giugiuyg');
  }

  render() {
    const {
      first_name,
      last_name,
      phone,
      cin,
      email,
      password,
    } = this.state.livreeur;
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
          <dt className="col-sm-2">cin</dt>
          <dd className="col-sm-10">{cin}</dd>
          <dt className="col-sm-2">email</dt>
          <dd className="col-sm-10">{email}</dd>
          <dt className="col-sm-2">password</dt>
          <dd className="col-sm-10">{password}</dd>
        </dl>
      </div>
    );
  }
}
