import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  FlatList
} from "react-native";
import DogsListComponent from "../components/dogsListComponent";
import axios from "axios";
import NavigationOptions from "../components/header";

export default class ApiList extends React.Component {
  static navigationOptions = NavigationOptions("Dogs Breed List");
  state = {
    dogsList: {},
    allDogsList: [],
    apiLoaded: false
  };

  componentWillMount = async () => {
    await axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(Response => {
        this.setState({ dogsList: Response.data });
      })
      .catch(function(error) {
        console.log("error", error);
      });

    let allDogsList = [];
    await Object.keys(this.state.dogsList).map(keyName => {
      return Object.keys(this.state.dogsList[keyName]).map((name, index) => {
        return keyName == "message" ? (
          //this.state.dogsList[keyName][name]
          keyName.length > 0 ? (
            (allDogsList[index] = name)
          ) : (
            <View />
          )
        ) : (
          <View />
        );
      });
    });

    this.setState({ allDogsList, apiLoaded: true });
  };

  dogNameOnClick = name => {
    this.props.navigation.navigate("DogApiDetail", { name: name });
  };

  render() {
    // let dogsListTemplate = this.state.allDogsList.map((name, i) => {
    //   return (
    //     <DogsListComponent
    //       key={i}
    //       name={name}
    //       onPress={() => this.dogNameOnClick(name)}
    //     />
    //   );
    // });

    let dogsListTemplate = (
      <FlatList
        data={this.state.allDogsList}
        renderItem={({ item }) => (
          <DogsListComponent
            name={item}
            onPress={() => this.dogNameOnClick(item)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );

    return (
      <ScrollView style={styles.container}>
        {this.state.apiLoaded ? (
          dogsListTemplate
        ) : (
          <ActivityIndicator size="large" />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#192F57"
  }
});
