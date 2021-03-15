import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class Listdelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devv: [],
      // limit: 2,
      // skip: 0,
    };
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:4000/delivery/dev/${id}`).then((res) => {
      alert(' has been deleted successfully');
      this.getDELVERY();
    });
  };

  componentDidMount() {
    this.getDELVERY();
  }
  getDELVERY() {
    axios.get(`http://localhost:4000/delivery/all`).then((res) => {
      if (res.data) {
        this.setState({
          devv: res.data.data,
        });
        console.log('dev :', this.state.devv);
      }
    });
  }

  filterindata(devv, searchTerm) {
    const resultat = devv.filter(
      (x) =>
        x.first_name.toLowerCase().includes(searchTerm) ||
        x.last_name.toLowerCase().includes(searchTerm) ||
        x.phone.toLowerCase().includes(searchTerm) ||
        x.from.toLowerCase().includes(searchTerm) ||
        x.to.toLowerCase().includes(searchTerm)
    );
    this.setState({ devv: resultat });
  }
  handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    axios.get('http://localhost:4000/delivery/all').then((res) => {
      if (res.data) {
        this.filterindata(res.data.data, searchTerm);
      }
    });
  };
  render() {
    return (
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
                  <a className="btn btn-warning mx-3" href={`/edit/${vk._id}`}>
                    <i className="fas fa-edit"></i> Edit
                  </a>
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(vk._id)}
                  >
                    <i className="fas fa-times-circle"></i> Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/add" className="bot btn btn-secondary">
          Add Book
        </Link>

        {/* <div>
          <div onClick={this.nextPage}> Previous Page </div>
          <div onClick={this.previousPage}> Next Page </div>
        </div> */}
      </div>
    );
  }
}
