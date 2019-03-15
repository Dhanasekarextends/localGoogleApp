import React from "react";
import axios from "axios";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";
import RoundButton from "../components/roundButton";
import NavigationOptions from "../components/header";
export default class DogApiDetail extends React.Component {
  static navigationOptions = NavigationOptions("Dog Detail");
  state = {
    dogImage: "",
    dogName: "",
    apiLoaded: false
  };


  componentDidMount = () => {
    console.log(this.props.navigation)
    this.nextImageApi();
  };

  nextImageApi = async () => {
    this.setState({apiLoaded: false})
    const { navigation } = this.props;
    let dogName = navigation.getParam("name", "");
    let dogImage;
    await axios
      .get("https://dog.ceo/api/breed/" + dogName + "/images/random")
      .then(Response => {
        dogImage = Response.data.message;
      })
      .catch(function(error) {
        console.log("error", error);
      });
    this.setState({ dogImage, apiLoaded: true });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.apiLoaded ? (
          <Image
            style={styles.imageStyle}
            source={{ uri: this.state.dogImage }}
          />
        ) : (
          <ActivityIndicator size="large" />
        )}
        <RoundButton text={">"} onPress={this.nextImageApi} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#192F57",
  },
  imageStyle: {
    flex: 1,
    resizeMode: "contain",
  }
});
