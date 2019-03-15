import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { MapView, Marker } from "react-native-maps";

export default class MapApiScreen extends React.Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    mapMarkers: {
        coordinate:"",
        title: "",
        description: "",
    }
  };

  onRegionChange(region) {
    this.setState({ region });
  }

  componentDidMount() {
    let region = {
      latitude: 12.996933,
      longitude: 80.209504,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };
    this.onRegionChange(region);
  }

  render() {
    return (
      <MapView style={styles.container} initialRegion={this.state.region} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
