import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import NavigationOptions from "../components/header";
import InputField from "../components/inputField";
import NormalButton from "../components/normalButton";

export default class SignUp extends React.Component {
  static navigationOptions = NavigationOptions("Signup");

  state = {
    userName: "",
    emailId: "",
    password: "",
    cPassword: ""
  };

  signUpOnPress = () => {
    alert("Signed Up");
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView style={styles.setContainer}>
          <Text style={styles.labelStyle}>UserName</Text>
          <InputField placeholder={"UserName"} />
          <Text style={styles.labelStyle}>EmailID</Text>
          <InputField placeholder={"Email ID"} />
          <Text style={styles.labelStyle}>Mobile Number</Text>
          <InputField placeholder={"Mobile Number"} />
          <Text style={styles.labelStyle}>Password</Text>
          <InputField placeholder={"Password"} secure={true} />
          <Text style={styles.labelStyle}>Confirm Password</Text>
          <InputField placeholder={"Confirm Password"} secure={true} />
        </ScrollView>
        <View style={{ marginLeft: "20%", marginRight: "20%" }}>
          <NormalButton title={"SignUp"} onPress={this.signUpOnPress} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#192F57"
  },
  setContainer: {
    margin: 5
  },
  labelStyle: {
    color: "white",
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 5,
    fontSize: 14
  }
});
