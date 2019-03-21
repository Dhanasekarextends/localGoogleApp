import React from "react";
import { View, StyleSheet } from "react-native";
import NormalButton from "../components/normalButton";
import { Camera, Permissions } from "expo";

export default class Settings extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <NormalButton title={"Get Something"} onPress={()=>{
              this.props.navigation.navigate("CameraScreen");}} />
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
