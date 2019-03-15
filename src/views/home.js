import React from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import NormalButton from "../components/normalButton";

export default class Home extends React.Component {
    
  state = {
    response: {}
  };

  apiCall = () => {
    this.props.navigation.navigate("ApiList");
  };

  render() {
    
    return (
      <View style={styles.container}>
        <NormalButton title={"Get Dogs Api"} onPress={this.apiCall} />
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
