import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const roundButton = props => {
  return (
    <TouchableOpacity style={styles.roundButton} onPress={props.onPress}>
      <Text
        style={{
          color: "white",
          fontSize: 30,
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundButton: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "5%",
    elevation: 10,
    right: "5%",
    backgroundColor: "#535576",
  }
});

export default roundButton;
