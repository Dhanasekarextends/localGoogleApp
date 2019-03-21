import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { Permissions } from "expo";

export default class MapApiScreen extends React.Component {
  state = {
    region: {
      latitude: 12.996933,
      longitude: 80.209504,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    coordinate: {
      latitude: 12.996933,
      longitude: 80.209504
    },
    focusedLocation: {
      latitude: "",
      longitude: ""
    }
  };

  onRegionChange(region) {
    this.setState({ region });
  }

  componentDidMount() {
    <Marker
      coordinate={{
        latitude: 12.996933,
        longitude: 80.209504
      }}
    />;

    // this.onRegionChange(region);
  }

  componentWillMount() {
    const { Location, Permissions } = Expo;
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status, permissions } = Permissions.askAsync(Permissions.LOCATION);
    if (status === "granted") {
      alert(status);
      return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    } else {
      //throw new Error("Location permission not granted");
    }
  }

  locationPicker = event => {
    const coordiantes = event.nativeEvents.coordinate;
    this.setState({
      coordiante: {
        latitude: "",
        longitude: ""
      }
    });
  };

  render() {
    return (
      <MapView style={styles.container} initialRegion={this.state.region}>
        <Marker coordinate={this.state.coordinate} />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
