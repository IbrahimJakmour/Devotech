import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel"

// const MyMapComponent = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
//   </GoogleMap>
// )

const MapWithAMarkerWithLabel = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 33.891834, lng: 35.49863 }}
  >
    <MarkerWithLabel
      position={{ lat: 33.891834, lng: 35.49863 }}
      labelAnchor={new google.maps.Point(0, 0)}
    >
      <div><img className="loader__image" src="/images/1.jpg" /></div>
    </MarkerWithLabel>
  </GoogleMap>
);

  export default MapWithAMarkerWithLabel
