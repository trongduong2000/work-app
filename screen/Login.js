import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
        //touchableopactity: click; stylesheet: css 
function Login({}){
    return(
        
        <View style={styles.hello}> 
            <Image source={require('../image/cv.jpg')}
                    style={styles.img}>
            
            </Image>
            <TextInput style={styles.input}
                    placeholder='Username'> 
            
            </TextInput>
            <TextInput style={styles.input}
                placeholder='Password' secureTextEntry>

            </TextInput>
            <TouchableOpacity style={styles.button}> 
                <Text style={styles.textlg}>Login</Text>
            </TouchableOpacity>
            
        </View>
    )
}
const styles=StyleSheet.create({
    hello:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
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
    img:{
        width:250,
        resizeMode: 'contain',
        marginBottom:10,
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
      textlg:{
          fontSize:15,
          fontWeight:'bold',
          color:'#fff'
      },
})//kieu nhu css
export default Login;
