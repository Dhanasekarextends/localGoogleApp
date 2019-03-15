import React from "react";
import Login from "./views/login";
import SignUp from "./views/signup";
import Home from "./views/home";
import ApiList from "./views/apiList";
import ApiScreen from "./views/apiScreen";
import Settings from "./views/settings";
import DogApiDetail from "./views/dogApiDetail";
import MapApiScreen from './views/mapApiScreen';
import Icon from "@expo/vector-icons/Ionicons";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { AsyncStorage } from "react-native";

const headerNavigation = navigation => {
  return (
    <Icon
      style={{ paddingLeft: 10 }}
      onPress={() => navigation.openDrawer()}
      name="md-menu"
      size={30}
    />
  );
};

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Home",
        headerLeft: headerNavigation(navigation)
      };
    }
  },
  ApiList: {
    screen: ApiList
  },
  DogApiDetail: {
    screen: DogApiDetail
  }
});

const MiddleStack = createStackNavigator({
  ApiScreen: {
    screen: ApiScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: "ApiScreen",
        headerLeft: headerNavigation(navigation)
      };
    }
  },
  MapApiScreen: {
    screen: MapApiScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Map Api Screen",
        headerLeft: headerNavigation(navigation)
      };
    }
  }
});

const lastStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Settings",
        headerLeft: headerNavigation(navigation)
      };
    }
  }
});

const DashboardTabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    MiddleStack,
    lastStack
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    }
  }
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const loginStack = createStackNavigator({
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: DashboardStackNavigator
  },
  Login: {
    screen: loginStack,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Logout"
      };
    }
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Login: {
    screen: loginStack
  },
  SignUp: {
    screen: SignUp
  },
  Home: {
    screen: AppDrawerNavigator
  }
});

export default createAppContainer(AppSwitchNavigator);
