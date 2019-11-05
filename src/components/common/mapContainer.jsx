import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Geocode from "react-geocode";
import { getCollaborator } from "../../services/collaboratorService";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);

export class MapContainer extends Component {
  state = {
    collaboratorId: this.props.collaboratorId,
    name: "",
    address: "",
    location: { lat: -9.585044, lng: -35.761056 },
    activeMarker: {},
    showingInfoWindow: true
  };

  async componentDidMount() {
    try {
      let { data: collaborator } = await getCollaborator(
        this.state.collaboratorId
      );
      this.setState({ name: collaborator.name, address: collaborator.address });
      let response = await Geocode.fromAddress(
        "Maceió, " + collaborator.address
      );
      let location = response.results[0].geometry.location;
      this.setState({ location });
    } catch (error) {}
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
    let { name, address } = this.state;
    let { location } = this.state;

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
  apiKey: process.env.REACT_APP_GOOGLE_KEY
})(MapContainer);
