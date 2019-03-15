import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default class DogsListComponent extends React.Component {
  state = {
    dropDownList: true
  };

  render() {
    let dropDownList = <Text style={styles.dropDownStyle}>DropDown</Text>;
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.textStyle}>{this.props.name}</Text>
        {/* { this.state.dropDownList ? dropDownList : <View />}  */}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
    backgroundColor: "#eee",
    borderRadius: 5,
    overflow: 'hidden'
  },
  textStyle: {
    flex: 1,
    padding: 10,
    backgroundColor: "#535576",
    color: 'white',
    textTransform: 'capitalize',
  },
  dropDownStyle: {
    padding: 10,
    width: "100%",
    backgroundColor: "skyblue",
    alignItems: "center"
  }
});
