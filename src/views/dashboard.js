import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavigationOptions from "../components/header";

export default class Dashboard extends React.Component {
    static navigationOptions = NavigationOptions("Dashboard", null);

    render(){
        return(
            <View style={styles.container}></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});