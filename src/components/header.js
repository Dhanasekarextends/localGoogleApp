const navigationOptions = (title,headerLeft) => {
  return {
    title: title,
    headerLeft: headerLeft,
    headerStyle: {
      backgroundColor: "#192F57",
      elevation: 0
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
};

export default navigationOptions;
