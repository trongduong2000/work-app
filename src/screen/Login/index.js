import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
//touchableopactity: click; stylesheet: css

import User from "../../service/user";

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() === "") {
      return Alert.alert("Tai khoan khong duoc de trong.");
    }
    if (password.trim() === "") {
      return Alert.alert("Mat Khau khong duoc de trong.");
    }
    if (username !== User.username || password !== User.password) {
      return Alert.alert("tai khoan hoac mat khau khong chinh sac !");
    }
    navigation.navigate("Joblist");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.hello}>
        <Image
          source={require("../../image/cv.jpg")}
          style={styles.img}
        >
        </Image>
        <TextInput style={styles.input} 
                    placeholder="Username"
                    onChangeText={(text) => setUsername(text)}>
        </TextInput>
        <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
        ></TextInput>
        <TouchableOpacity style={styles.button}  onPress={handleLogin}>
            <Text style={styles.textlg}>
                    Login
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.TextSignUp}>
                Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  hello: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: "rgba(0,0,0,.1)",
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    color: "black",
    fontSize: 18,
  },
  img: {
    width: 250,
    resizeMode: "contain",
    marginBottom: 10,
  },
  button: {
    fontWeight: "bold",
    backgroundColor: "blue",
    width: 250,
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textlg: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  TextSignUp: {
    fontSize: 13,
    color: "red",
    marginTop: 10,
  },
}); //kieu nhu css
export default Login;
