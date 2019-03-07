import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import UInputField from "./components/uInputField";
import LoginBackground from "./assets/login_bg.jpg";
import UserIcon from "./assets/user.svg";
import NormalButton from "./components/normalButton";

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showPassword: true
    }
  }

  showPassword=()=>{
    console.log("show password toggle")
    this.setState({
      showPassword: !this.state.showPassword,
    })
  }

  render() {
    return (
      <ImageBackground style={styles.imageContainer} source={LoginBackground}>
        <View style={styles.container}>
          <View style={styles.logoView} />
          <View style={styles.loginView}>
            <View style={styles.userLogoContainer}>
              <Image style={styles.userLogo} source={LoginBackground} />
              <UInputField placeholder={"Email ID or Mobile Number"} />
            </View>
            <View style={styles.userLogoContainer}>
              <Image style={styles.userLogo} source={LoginBackground} />
              <UInputField placeholder={"Password"} secureTextEntry={this.state.showPassword} />
              <TouchableOpacity onPress={this.showPassword} >
              <Image style={styles.userLogo} source={LoginBackground} />
              </TouchableOpacity>
            </View>
            <View style={styles.forgotPasswordView}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </View>
          </View>
          <NormalButton title={"Login"} onPress={() => alert("Logged In")} />
          <View style={styles.signUpView} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    resizeMode: "cover"
  },
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#21094B99",
  },
  logoView: {
    flex: 5
  },
  loginView: {
    width: "85%",
    flex: 4,
    alignItems: "center",
    backgroundColor: "#ffffff35",
    borderRadius: 5,
    justifyContent: "center"
  },
  signUpView: {
    flex: 2
  },
  forgotPassword: {
    color: "#f1f1f1"
  },
  forgotPasswordView: {
    width: "100%",
    alignItems: "flex-end",
    marginRight: 20
  },
  userLogoContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#f1f1f1",
    marginBottom: 10,
    
  },
  userLogo: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  }
});
