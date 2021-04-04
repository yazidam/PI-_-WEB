import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
export default class Listdelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devv: [],
      // limit: 2,
      // skip: 0,
      pagtable: [],
      perPage: 2,
      currentPage: 0,
      offset: 0,
    };
    // this.handlePageClick = this.handlePageClick.bind(this);
  }

  // getDELVERY() {
  //   axios.get(`http://localhost:4000/delivery/all`).then((res) => {
  //     if (res.data) {
  //       this.setState({
  //         devv: res.data.data,
  //       });
  //       console.log('dev :', this.state.devv);
  //     }
  //   });
  // }

  //*************************************************CODE PAGINATION Y5DEM AMA FIH UN PETIT ERR************************************************************* */
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };
  loadMoreData() {
    const data = this.state.pagtable;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      devv: slice,
    });
  }
  componentDidMount() {
    this.getDELVERY();
  }
  getDELVERY() {
    axios.get(`http://localhost:4000/delivery/all`).then((res) => {
      console.log(res.data);
      var tdata = res.data.data;
      console.log('data-->' + JSON.stringify(tdata));

      var slice = tdata.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      this.setState({
        pageCount: Math.ceil(tdata.length / this.state.perPage),
        pagtable: res.data.data,
        devv: slice,

        from: res.data.data[0].from,
        count: res.data.data.length,
      });

      axios.get(`http://localhost:4000/delivery/all/from`).then((res) => {
        this.setState({
          list: res.data.data,
        });
        this.state.list.map((l) => {
          axios
            .get(
              `https://geocode.search.hereapi.com/v1/geocode?q=${l.from}&apiKey=iI0WfBFsaj5zj71GEKN87i2yuIiyzcTvPMGOKIQSNRM`
            )
            .then((res, err) => {
              console.log('length fo table :', this.state.count);

              console.log('position lan et lat : ', res.data.items[0].position);

              console.log('location bet t7did : ', res.data.items[0].title);
              // console.log('fromm : ', this.state.from);
              const to2 = `https://geocode.search.hereapi.com/v1/geocode?q=${l.from}&apiKey=iI0WfBFsaj5zj71GEKN87i2yuIiyzcTvPMGOKIQSNRM`;
              console.log('to : ', to2);
              // console.log(
              //   'geocode : ',
              //   `https://geocode.search.hereapi.com/v1/geocode?q=${this.state.from}&apiKey=60U5H1Z9i-hVqOiuV1mw5UJCXcqK_kHNl7Us-_YUqmI`
              // );
            });
        });

        //console.log('dev :', this.state.dev);
        //console.log('hhhh :', this.state.pagtable);
        console.log('hh:', this.state.from);
        //*********************************************************************** */
        console.log('dev :', this.state.devv);
        console.log('fromm :', this.state.from);
      });
    });
  }

  //******************************************************************************************************************** */
  // componentDidMount() {
  //   this.getDELVERY();
  // }
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

  onDelete = (id) => {
    axios.delete(`http://localhost:4000/delivery/dev/${id}`).then((res) => {
      alert(' has been deleted successfully');
      this.getDELVERY();
    });
  };
  // getallform = () => {
  //   axios.get(`http://localhost:4000/delivery/all/from`).then((res) => {
  //     this.setState({
  //       list: res.data.data,
  //     });
  //     console.log('all from :', this.state.list);
  //   });
  // };
  //***************************************************************************fahed */

  //********************************************************************************* */
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
        <Table className="table table-dark table-striped">
          <Thead>
            <Tr>
              <Th scope="col">NUM</Th>
              <Th scope="col">FIRST_NAME</Th>
              <Th scope="col">LAST_NAME</Th>
              <Th scope="col">PHONE</Th>
              <Th scope="col">FROM</Th>
              <Th scope="col">TO</Th>
              <Th scope="col">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {this.state.devv.map((vk, index, key) => (
              <Tr>
                <Th scope="row">{index}</Th>
                <Td>
                  <Link className="name" to={`/detail/${vk._id}`}>
                    <Td>{vk.first_name}</Td>
                  </Link>
                </Td>
                <Td>{vk.last_name}</Td>
                <Td>{vk.phone}</Td>
                <Td>{vk.from}</Td>
                <Td>{vk.to}</Td>

                <Td>
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
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Link to="/add" className="bot btn btn-secondary">
          Add Book
        </Link>
        <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />

        {/* <div>
          <div onClick={this.nextPage}> Previous Page </div>
          <div onClick={this.previousPage}> Next Page </div>
        </div> */}
        <CalendarComponent className="calendarr"></CalendarComponent>
      </div>
    );
  }
}
