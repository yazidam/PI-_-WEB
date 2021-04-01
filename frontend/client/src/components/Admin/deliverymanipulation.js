import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class deliverymanipulation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devv: [],
      admintab: [],
      // limit: 2,
      // skip: 0,
    };
  }
  componentDidMount() {
    this.getDELVERYad();
    this.getLIVREURadmin();
  }
  getDELVERYad() {
    axios.get(`http://localhost:4000/delivery/all`).then((res) => {
      if (res.data) {
        this.setState({
          devv: res.data.data,
        });
        console.log('dev :', this.state.devv);
      }
    });
  }
  getLIVREURadmin() {
    axios.get(`http://localhost:4000/admindelll/all`).then((res) => {
      if (res.data) {
        this.setState({
          admintab: res.data.data,
        });
        console.log('list delivery man :', this.state.admintab);
      }
    });
  }
  onDelete = (id) => {
    axios
      .delete(`http://localhost:4000/admindelll/admindev/${id}`)
      .then((res) => {
        alert(' has been deleted successfully');
        this.getLIVREURadmin();
      });
  };
  render() {
    return (
      <>
        <div className="container">
          {/* <h3 id="b">All Books </h3> */}
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h4>All Delivery</h4>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchTerm"
                onChange={this.handleTextSearch}
              ></input>
            </div>
          </div>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">NUM</th>
                <th scope="col">FIRST_NAME</th>
                <th scope="col">LAST_NAME</th>
                <th scope="col">PHONE</th>
                <th scope="col">FROM</th>
                <th scope="col">TO</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.devv.map((vk, index, key) => (
                <tr>
                  <th scope="row">{index}</th>
                  <td>
                    <Link to={`/detail/${vk._id}`}>
                      <td>{vk.first_name}</td>
                    </Link>
                  </td>
                  <td>{vk.last_name}</td>
                  <td>{vk.phone}</td>
                  <td>{vk.from}</td>
                  <td>{vk.to}</td>

                  <td>
                    <a
                      className="btn btn-warning mx-3"
                      href={`/adddeliveryman/${vk._id}`}
                    >
                      <i className="fas fa-edit"></i> Add delivery man
                    </a>
                    {/* <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(vk._id)}
                  >
                    <i className="fas fa-times-circle"></i> Delete
                  </a> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <Link to="/add" className="bot btn btn-secondary">
          Add Book
        </Link> */}
          {/* <div>
          <div onClick={this.nextPage}> Previous Page </div>
          <div onClick={this.previousPage}> Next Page </div>
        </div> */}
        </div>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <h1 className="devv"> Delivery Affected </h1>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          <div className="colllll ">
            {this.state.admintab.map((vk, index, key) => (
              <div className="card h-90 mx-3">
                <div className="card-body ">
                  <h5 className="card-title">FIRST_NAME :{vk.first_name}</h5>
                  <h5 className="card-title">LAST_NAME : {vk.last_name}</h5>
                  <h5 className="card-title">PHONE : {vk.phone}</h5>
                  <h5 className="card-title">FROM : {vk.from}</h5>
                  <h5 className="card-title">TO : {vk.to}</h5>
                  <h5 className="card-title">
                    DELIVERY_MAN : {vk.delivery_man}
                  </h5>
                </div>
                <div className="card-footer">
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(vk._id)}
                  >
                    <i className="fas fa-times-circle"></i> Delete
                  </a>
                  {/* <a
                    className="btn btn-warning mx-3"
                    href={`/editlivreur/${vk._id}`}
                  >
                    <i className="fas fa-edit"></i> Edit
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
