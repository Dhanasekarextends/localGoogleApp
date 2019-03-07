import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

const normalButton = props => {
  return (
    <TouchableHighlight style={styles.submit}>
      <Text style={styles.submitText}>Login</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  submit: {
    backgroundColor: "#ff001d",
    borderRadius: 50,
    marginTop: -25,
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
