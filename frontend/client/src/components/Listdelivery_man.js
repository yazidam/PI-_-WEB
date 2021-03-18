import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class Listdelivery_man extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tablivreur: [],

      //pagtable: [],
      //perPage: 2,
      //currentPage: 0,
      //offset: 0,
    };
  }
  getLIVREUR() {
    axios.get(`http://localhost:4000/livreur/all`).then((res) => {
      if (res.data) {
        this.setState({
          tablivreur: res.data.data,
        });
        console.log('list delivery man :', this.state.tablivreur);
      }
    });
  }
  componentDidMount() {
    this.getLIVREUR();
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:4000/livreur/livreur/${id}`).then((res) => {
      alert(' has been deleted successfully');
      this.getLIVREUR();
    });
  };
  render() {
    return (
      <>
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          <div className="colllll ">
            {this.state.tablivreur.map((vk, index, key) => (
              <div className="card h-90 mx-3">
                <div className="card-body ">
                  <h5 className="card-title">
                    FIRST_NAME :
                    <Link to={`/detaill/${vk._id}`}> {vk.first_name}</Link>
                  </h5>
                  <h5 className="card-title">LAST_NAME : {vk.last_name}</h5>
                  <h5 className="card-title">PHONE : {vk.phone}</h5>
                  <h5 className="card-title">CIN : {vk.cin}</h5>
                  <h5 className="card-title">EMAIL : {vk.email}</h5>
                  <h5 className="card-title">PASSWORD : {vk.password}</h5>
                </div>
                <div className="card-footer">
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(vk._id)}
                  >
                    <i className="fas fa-times-circle"></i> Delete
                  </a>
                  <a
                    className="btn btn-warning mx-3"
                    href={`/editlivreur/${vk._id}`}
                  >
                    <i className="fas fa-edit"></i> Edit
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link to="/addlivreeur" className="bot btn btn-secondary my-5">
          Add Book
        </Link>
      </>
    );
  }
}
