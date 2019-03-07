import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const uInputField = props => {
    return(
        <TextInput style={styles.textInput} placeholder={props.placeholder} secureTextEntry={props.secureTextEntry}/>
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: "78%",
        margin: 5,
        padding: 8,
        color: "#f1f1f1",
        borderRadius: 5,
        fontSize: 17
    }
});

export default uInputField;