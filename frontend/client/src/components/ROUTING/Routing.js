import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { withLeaflet } from 'react-leaflet';

class Routing extends MapLayer {
  constructor(props) {
    super(props);
    console.log('routing raed table : ', this.props.Raed);
    console.log('routing ahmed table : ', this.props.Ahmed);
    console.log('la taille du table :', this.props.Count); //3
  }

  createLeafletElement(props) {
    var latlngArray = [];
    var input = getPoints();
    var group = L.featureGroup();
    function getPoints() {
      let input = [
        // [props.Raed[0].lat, props.Raed[0].lng],
        // [props.Ahmed[0].lat, props.Ahmed[0].lng],
        // // [props.Raed[1].lat, props.Raed[1].lng],
        // // [props.Ahmed[1].lat, props.Ahmed[1].lng],
        // // [props.Raed[2].lat, props.Raed[2].lng],
        // // [props.Ahmed[2].lat, props.Ahmed[2].lng],
        // // [props.Raed[3].lat, props.Raed[3].lng],
        // // [props.Ahmed[3].lat, props.Ahmed[3].lng],
      ];
      for (var i = 0; i < props.Count; i++) {
        input.push(
          [props.Raed[i].lat, props.Raed[i].lng],
          [props.Ahmed[i].lat, props.Ahmed[i].lng]
        );
      }
      console.log('inputttt feha coordonee :', input);
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
