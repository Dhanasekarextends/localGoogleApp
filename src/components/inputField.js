import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const inputField = props => {
    return(
        <TextInput style={styles.textInput} placeholder={props.placeholder} secureTextEntry={props.secure}/>
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: "100%",
        padding: 8,
        color: "white",
        backgroundColor: "#535576",
        borderRadius: 5,
        fontFamily: "Roboto-Light",
    }
});

export default inputField;