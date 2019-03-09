import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const normalButton = props => {
  return (
    <TouchableOpacity style={styles.submit} onPress={props.onPress}>
      <Text style={styles.submitText}>{props.title}</Text>
    </ TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submit: {
    backgroundColor: "#3E195B",
    borderRadius: 50,
    marginTop: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
  }
});

export default normalButton;
