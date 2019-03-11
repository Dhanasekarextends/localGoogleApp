import Login from "./views/login";
import SignUp from "./views/signup";
import Home from "./views/home";
import Dashboard from "./views/dashboard";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";

const MyRoutes = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
    },
    Home: {
      screen: Home
    }
  }
  // {
  //   headerMode: "none"
  // }
);

// const AppDrawNavigator = createDrawerNavigator({
//   Home: {
//     screen: Dashboard
//   }
// });

export default createAppContainer(MyRoutes);
