import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import UInputField from "../components/uInputField";
import LoginBackground from "../assets/login_bg.jpg";
import UserIcon from "../assets/user.svg";
import NormalButton from "../components/normalButton";
import Logo from "../assets/logo.png";

export default class Login extends React.Component {

  static navigationOptions = {
    header: null
  };

  state = {
    auth: false,
    showPassword: true,
    userDetails: {
      userName: "",
      password: ""
    }
  };

  showPassword = () => {
    console.log("show password toggle");
    this.setState(prevState => {
      return {
        showPassword: !prevState.showPassword
      };
    });
  };

  userNameValue = value => {
    let userDetails = {
      userName: value,
      password: this.state.userDetails.password
    };
    this.setState({ userDetails });
  };

  passwordValue = value => {
    let userDetails = {
      userName: this.state.userDetails.userName,
      password: value
    };
    this.setState({ userDetails });
  };

  loginOnPress = () => {
    let auth = false;
    let details = this.state.userDetails;
    if (details.userName !== "admin" && details.password !== "admin") {
      auth = true;
    } else {
      auth = false;
    }
    auth ? this.props.navigation.navigate("Home") : alert("Get Out");
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground style={styles.imageContainer} source={LoginBackground}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <View style={styles.logoView}>
            <Image source={Logo} style={styles.logoStyle} />
            <Text style={styles.productNameStyle}>VhiTech</Text>
          </View>
          <View style={styles.loginView}>
            <View style={styles.userLogoContainer}>
              <Ionicons
                style={styles.userLogo}
                name="ios-person"
                size={25}
                color="white"
              />
              <UInputField
                placeholder={"Email ID or Mobile Number"}
                value={this.state.userDetails.userName}
                onChangeText={value => this.userNameValue(value)}
              />
            </View>
            <View style={styles.userLogoContainer}>
              <Ionicons
                style={styles.userLogo}
                name="ios-key"
                size={25}
                color="white"
              />
              <UInputField
                placeholder={"Password"}
                value={this.state.userDetails.password}
                onChangeText={value => this.passwordValue(value)}
                secureTextEntry={this.state.showPassword}
              />
              <TouchableOpacity onPress={this.showPassword}>
                <Ionicons
                  style={styles.userLogo}
                  name="ios-eye"
                  size={25}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.forgotPasswordView}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: -25
            }}
          >
            <NormalButton title={"Login"} onPress={this.loginOnPress} />
          </View>
          <TouchableOpacity
            style={styles.signUpView}
            onPress={() => {this.props.navigation.navigate('SignUp');
            }}
          >
            <Text style={styles.signUpTextStyle}>click here to Sign Up</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
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
    backgroundColor: "#21094B99"
  },
  logoView: {
    flex: 5,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  logoStyle: {
    height: "35%",
    width: "35%"
  },
  productNameStyle: {
    fontSize: 30,
    color: "white",
    marginTop: 30
  },
  loginView: {
    width: "90%",
    flex: 4,
    alignItems: "center",
    backgroundColor: "#ffffff20",
    borderRadius: 5,
    justifyContent: "center",
    padding: 10
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
    borderBottomWidth: 1,
    borderColor: "#f1f1f1",
    marginBottom: 20
  },
  userLogo: {
    height: 26,
    width: 26,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  signUpView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  signUpTextStyle: {
    color: "white",
    fontSize: 12
  }
});
