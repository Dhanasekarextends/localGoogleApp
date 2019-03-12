import React from "react";
import { View, StyleSheet } from "react-native";
import NormalButton from "../components/normalButton";

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalButton title={"Get Something"} onPress={this.apiCall} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10
  }
});
