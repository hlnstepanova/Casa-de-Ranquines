import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAS2HquoZHX5z4RAJgeQ30jZDxluNGjcW4");

export class MapContainer extends Component {
  state = {
    selectedPlace: {
      name: this.props.selectedPlace.name,
      address: this.props.selectedPlace.address
    },
    location: { lat: -9.585044, lng: -35.761056 },
    activeMarker: {},
    showingInfoWindow: true
  };

  async componentDidMount() {
    try {
      console.log("Address", "Maceió, " + this.state.selectedPlace.address);
      const response = await Geocode.fromAddress(
        "Maceió, " + this.state.selectedPlace.address
      );
      const location = response.results[0].geometry.location;
      console.log("Location", location);
      this.setState({ location });
    } catch (error) {
      console.log(error);
    }
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  render() {
    const { name, address } = this.state.selectedPlace;
    const { location } = this.state;
    console.log("State location", location);

    const style = {
      width: "100%",
      height: "40%",
      margin: 20
    };

    return (
      <Map google={this.props.google} center={location} style={style} zoom={14}>
        <Marker
          title={name}
          name={name}
          position={location}
          onClick={this.onMarkerClick}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}
        >
          <div>
            <div>{name}</div>
            <div>{address}</div>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAS2HquoZHX5z4RAJgeQ30jZDxluNGjcW4"
})(MapContainer);
