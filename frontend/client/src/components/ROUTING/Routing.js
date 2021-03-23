// import { MapLayer } from 'react-leaflet';
// import React, { Component } from 'react';
// import L from 'leaflet';
// import axios from 'axios';
// import 'leaflet-routing-machine';
// import { withLeaflet } from 'react-leaflet';

// class Routing extends (Component, MapLayer) {
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
//                 `https://geocode.search.hereapi.com/v1/geocode?q=${l.from}&apiKey=H1lGlgX0DWoCSbpZXngB7Mkal5VH_WRztFTLJRSltHA`
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
//                 `https://geocode.search.hereapi.com/v1/geocode?q=${t.to}&apiKey=H1lGlgX0DWoCSbpZXngB7Mkal5VH_WRztFTLJRSltHA`
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

//   createLeafletElement() {
//     var latlngArray = [];
//     var input = getPoints();
//     var group = L.featureGroup();
//     // let point = ['35.8293, 10.64863', '35.502445, 11.045721']
//     function getPoints() {
//       let input = [
//         [35.8293, 10.64863],
//         [35.502445, 11.045721],
//         [30.05679, 31.23328],
//         [36.53809, 104.20808],
//       ];
//       return input;
//     }
//     for (var i = 0; i < input.length; ++i) {
//       var ltln = L.latLng(input[i][0], input[i][1]);
//       L.circleMarker(ltln, {
//         radius: 2,
//       }).addTo(group);
//       latlngArray.push(ltln);
//     }
//     const { map } = this.props;
//     let leafletElement = L.Routing.control({
//       waypoints: latlngArray,
//     }).addTo(map.leafletElement);
//     return leafletElement.getPlan();
//   }
// }
// export default withLeaflet(Routing);

//*****************************************************************ahmed code ******************************* */
// import { MapLayer } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet-routing-machine';
// import { withLeaflet } from 'react-leaflet';

// class Routing extends MapLayer {
//   constructor(props) {
//     super(props);
//     console.log('routing raed table : ', this.props.Raed);
//     console.log('routing ahmed table : ', this.props.Ahmed);
//   }

//   createLeafletElement(props) {
//     var latlngArray = [];
//     var input = getPoints();
//     var group = L.featureGroup();

//     function getPoints() {
//       let input = [
//         [props.Raed[0].lat, props.Raed[0].lng],
//         [props.Ahmed[0].lat, props.Ahmed[0].lng],
//         [props.Raed[1].lat, props.Raed[1].lng],
//         [props.Ahmed[1].lat, props.Ahmed[1].lng],
//         // [35.502445, 11.045721],
//         // [30.0579, 31.23328],
//         // [36.53809, 104.20808],
//       ];
//       return input;
//     }

//     for (var i = 0; i < input.length; ++i) {
//       var ltln = L.latLng(input[i][0], input[i][1]);
//       L.circleMarker(ltln, {
//         radius: 2,
//       }).addTo(group);
//       latlngArray.push(ltln);
//     }
//     const { map } = this.props;
//     let leafletElement = L.Routing.control({
//       waypoints: latlngArray,
//     }).addTo(map.leafletElement);
//     return leafletElement.getPlan();
//   }
// }
// export default withLeaflet(Routing);
//*************************************************************************************************** */
import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { withLeaflet } from 'react-leaflet';

class Routing extends MapLayer {
  constructor(props) {
    super(props);
    console.log('routing raed table : ', this.props.Raed);
    console.log('routing ahmed table : ', this.props.Ahmed);
  }

  createLeafletElement(props) {
    var latlngArray = [];
    var input = getPoints();
    var group = L.featureGroup();
    function getPoints() {
      let input = [
        [props.Raed[0].lat, props.Raed[0].lng],
        [props.Ahmed[0].lat, props.Ahmed[0].lng],
        // [props.Raed[1].lat, props.Raed[1].lng],
        // [props.Ahmed[1].lat, props.Ahmed[1].lng],
      ];
      return input;
    }
    for (var i = 0; i < input.length; ++i) {
      var ltln = L.latLng(input[i][0], input[i][1]);
      L.circleMarker(ltln, {
        radius: 2,
      }).addTo(group);
      latlngArray.push(ltln);
    }
    const { map } = this.props;
    let leafletElement = L.Routing.control({
      waypoints: latlngArray,
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
