import React from "react";
import MyRoutes from "./src/navigation";
import { View, ActivityIndicator } from "react-native";
import { Font } from "expo";

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };
  
  async componentDidMount() {
    await Font.loadAsync({
      "Roboto-Light": require("./src/assets/fonts/Roboto-Light.ttf")
    });
    this.setState({
      fontLoaded: true
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.fontLoaded ? 
      <MyRoutes />
     : 
      <ActivityIndicator size="large" />
    }
      </View>
    );
  }
}
