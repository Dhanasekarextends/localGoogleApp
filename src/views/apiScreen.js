import React from "react";
import { View, StyleSheet } from "react-native";
import NormalButton from "../components/normalButton";
import MapApiScreen from './mapApiScreen';

export default class ApiScreen extends React.Component {

  apiCall=()=>{
    this.props.navigation.navigate("MapApiScreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <NormalButton title={"Get Maps Api"} onPress={this.apiCall} />
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
