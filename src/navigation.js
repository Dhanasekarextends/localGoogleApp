import Login from './views/login'
import SignUp from './views/signup'
import { createStackNavigator, createAppContainer } from "react-navigation";

const MyRoutes = createStackNavigator({
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
    },
  }, 
  // {
  //   headerMode: "none"
  // }
  );
  
  export default createAppContainer(MyRoutes);