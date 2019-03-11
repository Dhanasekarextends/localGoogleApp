import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavigationOptions from "../components/header";

export default class Home extends React.Component {
    static navigationOptions = NavigationOptions("Home", null);

    render(){
        return(
            <View style={styles.container}></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    }
});