import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Login from '../Login';

function Register({navigation}){
    return(
        <View style={styles.container}>
      <Text style={styles.textlogo}>Register</Text>
      <TextInput style={styles.textinput} placeholder="Username"></TextInput>
      <TextInput
        style={styles.textinput}
        secureTextEntry={true}
        placeholder="Password"
      ></TextInput>
       <TextInput
        style={styles.textinput}
        secureTextEntry={true}
        placeholder="Confirm Password"
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>Sign Up</TouchableOpacity>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
    },
    textinput: {
      width: 300,
      height: 40,
      backgroundColor: "rgba(0,0,0,.1)",
      borderRadius: 10,
      marginBottom: 10,
      paddingHorizontal: 10,
      color: "black",
      fontSize: 18,
    },
    username: {
      marginBottom: 10,
    },
    textlogo: {
      fontSize: 40,
      fontWeight: "bold",
      marginBottom: 50,
      color: "red",
    },
    button: {
      fontWeight: "bold",
      backgroundColor: "black",
      fontSize: 20,
      color: "#fff",
      width: 100,
      height: 50,
      borderRadius: 7,
      marginTop: 30,
      alignItems: "center",
      justifyContent: "center",
    },
  });
export default Register;