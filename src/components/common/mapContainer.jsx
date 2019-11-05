import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Geocode from "react-geocode";
<<<<<<< HEAD
import { getCollaborator } from "../../services/collaboratorService";
=======
>>>>>>> 304a1211bc8868b72fddd9d95c0fc4ecbe684029

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);

export class MapContainer extends Component {
  state = {
<<<<<<< HEAD
    collaboratorId: this.props.collaboratorId,
    name: "",
    address: "",
=======
    selectedPlace: {
      name: this.props.selectedPlace.name,
      address: this.props.selectedPlace.address
    },
>>>>>>> 304a1211bc8868b72fddd9d95c0fc4ecbe684029
    location: { lat: -9.585044, lng: -35.761056 },
    activeMarker: {},
    showingInfoWindow: true
  };

  async componentDidMount() {
    try {
<<<<<<< HEAD
      let { data: collaborator } = await getCollaborator(
        this.state.collaboratorId
      );
      this.setState({ name: collaborator.name, address: collaborator.address });
      let response = await Geocode.fromAddress(
        "Maceió, " + collaborator.address
      );
      let location = response.results[0].geometry.location;
=======
      const response = await Geocode.fromAddress(
        "Maceió, " + this.state.selectedPlace.address
      );
      const location = response.results[0].geometry.location;
>>>>>>> 304a1211bc8868b72fddd9d95c0fc4ecbe684029
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
<<<<<<< HEAD
    let { name, address } = this.state;
    let { location } = this.state;
=======
    const { name, address } = this.state.selectedPlace;
    const { location } = this.state;
>>>>>>> 304a1211bc8868b72fddd9d95c0fc4ecbe684029

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
