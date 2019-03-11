import React from "react";
import { TextInput, StyleSheet } from "react-native";

const uInputField = props => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: "90%",
    padding: 4,
    paddingBottom: 2,
    color: "#f1f1f1",
    borderRadius: 5,
    fontSize: 16,
    fontFamily: "Roboto-Light"
  }
});

export default uInputField;
