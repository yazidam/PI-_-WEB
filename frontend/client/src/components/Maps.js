// import React, { Component } from 'react';
// import L from 'leaflet';
// import axios from 'axios';
// import Routing from './ROUTING/Routing';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
// export default class Maps extends Component {
//   constructor() {
//     super();

//     this.state = {
//       longitude: '335848',
//       latitude: '93224',
//       locationAccuracy: '',
//       posfrom: '',
//       posfrom1: '',
//       devv: [],
//       list: [],
//       listto: [],
//       list2: [],
//       posf: null,
//       raed: [],
//       ahmed: [],
//     };
//   }
//   saveMap = (map) => {
//     this.map = map;
//     this.setState({
//       isMapInit: true,
//     });
//   };

//   componentDidMount() {
//     let geoOptions = {
//       enableHighAccuracy: true,
//       timeOut: 20000,
//       maximumAge: 60 * 60 * 24,
//     };
//     this.setState({ ready: false, error: null });
//     navigator.geolocation.getCurrentPosition(
//       this.geoSuccess,
//       this.geoFailure,
//       geoOptions
//     );
//     this.getDELVERYY();
//   }
//   getDELVERY() {
//     axios.get(`http://localhost:4000/delivery/all`).then((res) => {
//       this.setState({
//         devv: res.data.data,
//       });
//       console.log('dev :', this.state.devv);
//     });
//   }
//   getDELVERYY = () => {
//     axios.get(`http://localhost:4000/delivery/all`).then((res) => {
//       this.setState({
//         devv: res.data.data,
//       });

//       axios.get(`http://localhost:4000/delivery/all/from`).then((res) => {
//         this.setState({
//           list: res.data.data,
//           count: res.data.data.length,
//         });
//         console.log('list  : ', this.state.list);
//         axios.get(`http://localhost:4000/delivery/all/to`).then((res) => {
//           this.setState({
//             listto: res.data.data,
//             count: res.data.data.length,
//           });

//           this.state.list.map((l) => {
//             axios
//               .get(
//                 `https://geocode.search.hereapi.com/v1/geocode?q=${l.from}&apiKey=84vrS35OwNWoehMzXMkaD6odliSrYDGV1o9e1VW8Ljo`
//               )
//               .then((res, err) => {
//                 this.setState({
//                   posfrom: res.data.items[0].position.lat,
//                   posfrom1: res.data.items[0].position.lng,
//                   posF: res.data.items[0].position,
//                 });
//                 this.setState((prevState) => ({
//                   raed: [...prevState.raed, this.state.posF],
//                 }));

//                 console.log('raed  : ', this.state.raed);
//                 console.log('posF  : ', this.state.posF);
//               });
//           });

//           this.state.listto.map((t) => {
//             axios
//               .get(
//                 `https://geocode.search.hereapi.com/v1/geocode?q=${t.to}&apiKey=84vrS35OwNWoehMzXMkaD6odliSrYDGV1o9e1VW8Ljo`
//               )
//               .then((res, err) => {
//                 this.setState({
//                   posto: res.data.items[0].position.lat,
//                   posto1: res.data.items[0].position.lng,
//                   posT: res.data.items[0].position,
//                   //raed: [...this.state.raed, this.state.posF ],
//                 });
//                 this.setState((prevState) => ({
//                   ahmed: [...prevState.ahmed, this.state.posT],
//                 }));
//                 console.log('ahmed  : ', this.state.ahmed);
//               });
//           });
//         });
//       });

//       console.log('dev :', this.state.devv);
//     });
//   };

//   geoSuccess = (position) => {
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);
//     this.setState({
//       ready: true,
//       lat: position.coords.latitude,
//       lng: position.coords.longitude,
//     });
//     console.log('latitude:' + this.state.lat);
//     console.log('longitude:' + this.state.lng);
//   };
//   geoFailure = (err) => {
//     this.setState({ error: err.message });
//   };
//   render() {
//     const { posfrom, posfrom1 } = this.state;
//     console.log('RAAAAAAAAAAAAAAED', this.state.raed);
//     console.log('AHMEEEEEEEEEEED', this.state.ahmed);

//     const grenIcon = L.icon({
//       iconSize: [25, 41],
//       iconAnchor: [12, 41],
//       popupAnchor: [-3, -76],
//       shadowSize: null,
//       shadowAnchor: null,
//       className: 'custom-icon',

//       iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',

//       shadowUrl:
//         'https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png',
//     });

//     var greenIcon = L.icon({
//       iconUrl:
//         ' https://www.pradipdebnath.com/wp-content/uploads/2019/12/map-marker-icon.png',

//       iconSize: [25, 41],
//       iconAnchor: [12, 41],
//       popupAnchor: [-3, -76],
//       shadowSize: null,
//       shadowAnchor: null,
//     });

//     var youarehericon = L.icon({
//       iconUrl: ' https://api.mqcdn.com/icons/multi-pin-a.png',

//       iconSize: [25, 41],
//       iconAnchor: [12, 41],
//       popupAnchor: [-3, -76],
//       shadowSize: null,
//       shadowAnchor: null,
//     });

//     return (
//       <>
//         <input
//           type="text"
//           name="start"
//           className="input"
//           id="start"
//           placeholder="Choose starting point"
//         />
//         <input
//           type="text"
//           name="end"
//           className="input"
//           id="destination"
//           placeholder="Choose starting point"
//         />
//         <button type="submit">Get Directions</button>
//         <div className="boxcontainer">
//           {this.state.lng != null && this.state.lat != null && (
//             <>
//               <Map
//                 ref={this.saveMap}
//                 style={{ width: '100%', height: '80vh' }}
//                 center={[this.state.lat, this.state.lng]}
//                 zoom={13}
//               >
//                 {this.state.raed.map((r) => (
//                   <>
//                     {this.state.ahmed.map((a) => (
//                       <>
//                         <TileLayer
//                           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                         />

//                         <Marker
//                           position={[this.state.lat, this.state.lng]}
//                           icon={youarehericon}
//                         >
//                           <Popup>You are here </Popup>
//                         </Marker>
//                         <Marker position={[r.lat, r.lng]} icon={grenIcon}>
//                           <Popup>You are from !! </Popup>
//                         </Marker>
//                         <Marker position={[a.lat, a.lng]} icon={greenIcon}>
//                           <Popup>You are to !! </Popup>
//                         </Marker>
//                         <Routing
//                           map={this.map}
//                           Raed={this.state.raed}
//                           Ahmed={this.state.ahmed}
//                         />
//                       </>
//                     ))}
//                   </>
//                 ))}
//               </Map>
//             </>
//           )}
//         </div>
//       </>
//     );
//   }
// }

// import React, { Component } from 'react';
// import { Map, TileLayer } from 'react-leaflet';
// import Routing from './ROUTING/Routing';

// export default class LeafletMap extends Component {
//   state = {
//     lat: 57.74,
//     lng: 11.94,
//     zoom: 13,
//     isMapInit: false,
//   };
//   saveMap = (map) => {
//     this.map = map;
//     this.setState({
//       isMapInit: true,
//     });
//   };

//   render() {
//     const position = [this.state.lat, this.state.lng];
//     return (
//       <Map center={position} zoom={this.state.zoom} ref={this.saveMap}>
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
//         />
//         {this.state.isMapInit && <Routing map={this.map} />}
//       </Map>
//     );
//   }
// }

import React, { Component } from 'react';
import L from 'leaflet';
import axios from 'axios';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet-routing-machine';
import Routing from './ROUTING/Routing';

export default class Maps extends Component {
  constructor() {
    super();

    this.state = {
      longitude: '335848',
      latitude: '93224',
      locationAccuracy: '',
      posfrom: '',
      posfrom1: '',
      devv: [],
      list: [],
      listto: [],
      list2: [],
      posf: null,
      raed: [],
      ahmed: [],
      count1: 0,
    };
  }
  saveMap = (map) => {
    this.map = map;
    this.setState({
      isMapInit: true,
    });
  };

  componentDidMount() {
    let geoOptions = {
      enableHighAccuracy: true,
      timeOut: 20000,
      maximumAge: 60 * 60 * 24,
    };
    this.setState({ ready: false, error: null });
    navigator.geolocation.getCurrentPosition(
      this.geoSuccess,
      this.geoFailure,
      geoOptions
    );
    this.getDELVERYY();
  }
  getDELVERY() {
    axios.get(`http://localhost:4000/delivery/all`).then((res) => {
      this.setState({
        devv: res.data.data,
      });
      console.log('dev :', this.state.devv);
    });
  }
  getDELVERYY = () => {
    axios.get(`http://localhost:4000/delivery/all`).then((res) => {
      this.setState({
        devv: res.data.data,
      });

      axios.get(`http://localhost:4000/delivery/all/from`).then((res) => {
        this.setState({
          list: res.data.data,
          count: res.data.data.length,
        });
        console.log('list  : ', this.state.list);
        axios.get(`http://localhost:4000/delivery/all/to`).then((res) => {
          this.setState({
            listto: res.data.data,
            count: res.data.data.length,
          });
          console.log('count est egal : ', this.state.count); //1
          this.state.list.map((l) => {
            axios
              .get(
                `https://geocode.search.hereapi.com/v1/geocode?q=${l.from}&apiKey=824Tq61CUUlqMdMo-TntaI4L64r5ngfuiMYIW5Rq3kY`
              )
              .then((res, err) => {
                this.setState({
                  posfrom: res.data.items[0].position.lat,
                  posfrom1: res.data.items[0].position.lng,
                  posF: res.data.items[0].position,
                  //raed: [...this.state.raed, this.state.posF ],
                });
                this.setState((prevState) => ({
                  raed: [...prevState.raed, this.state.posF],
                }));

                console.log('raed  : ', this.state.raed);
                console.log('posF  : ', this.state.posF);
              });
          });

          this.state.listto.map((t) => {
            axios
              .get(
                `https://geocode.search.hereapi.com/v1/geocode?q=${t.to}&apiKey=824Tq61CUUlqMdMo-TntaI4L64r5ngfuiMYIW5Rq3kY`
              )
              .then((res, err) => {
                this.setState({
                  posto: res.data.items[0].position.lat,
                  posto1: res.data.items[0].position.lng,
                  posT: res.data.items[0].position,
                  //raed: [...this.state.raed, this.state.posF ],
                });
                this.setState((prevState) => ({
                  ahmed: [...prevState.ahmed, this.state.posT],
                }));
                console.log('ahmed  : ', this.state.ahmed);
              });
          });
        });
      });

      console.log('dev :', this.state.devv);
    });
  };

  geoSuccess = (position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    this.setState({
      ready: true,
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
    console.log('latitude:' + this.state.lat);
    console.log('longitude:' + this.state.lng);
  };
  geoFailure = (err) => {
    this.setState({ error: err.message });
  };
  render() {
    const { posfrom, posfrom1 } = this.state;
    console.log('RAAAAAAAAAAAAAAED', this.state.raed);
    console.log('AHMEEEEEEEEEEED', this.state.ahmed);

    const grenIcon = L.icon({
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [-3, -76],
      shadowSize: null,
      shadowAnchor: null,
      className: 'custom-icon',
      // specify the path here
      iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
      shadowUrl:
        'https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png',
    });
    return (
      <>
        <input
          type="text"
          name="start"
          className="input"
          id="start"
          placeholder="Choose starting point"
        />
        <input
          type="text"
          name="end"
          className="input"
          id="destination"
          placeholder="Choose starting point"
        />
        <button type="submit">Get Directions</button>
        <div className="boxcontainer">
          {this.state.lng != null && this.state.lat != null && (
            <>
              <Map
                ref={this.saveMap}
                style={{ width: '100%', height: '80vh' }}
                center={[this.state.lat, this.state.lng]}
                zoom={13}
              >
                {this.state.raed.map((r) => (
                  <>
                    {this.state.ahmed.map((a) => (
                      <>
                        <TileLayer
                          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker
                          position={[this.state.lat, this.state.lng]}
                          icon={grenIcon}
                        >
                          <Popup>You are here </Popup>
                        </Marker>
                        <Marker position={[r.lat, r.lng]} icon={grenIcon}>
                          <Popup>You are from !! </Popup>
                        </Marker>
                        <Marker position={[a.lat, a.lng]} icon={grenIcon}>
                          <Popup>You are to !! </Popup>
                        </Marker>
                        <Routing
                          map={this.map}
                          Raed={this.state.raed}
                          Ahmed={this.state.ahmed}
                          Count={this.state.count} ///2
                        />
                      </>
                    ))}
                  </>
                ))}
              </Map>
            </>
          )}
        </div>
      </>
    );
  }
}
