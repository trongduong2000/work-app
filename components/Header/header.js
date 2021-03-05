import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

function Header({ title, onBack }) {
  
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backBtn} onPress={onBack}>
                    <Text style={styles.backText}>thoat</Text>
                 </TouchableOpacity>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </SafeAreaView>
    )
}

Header.defaultProps = {
    title: 'Header',
    onBack:()=>{}
}

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: '#fff'
    },
    container: {
        width: '100%',
        height: 80,
        backgroundColor: '#fff',
        justifyContent:"center",
        alignItems: 'center'
    },
    title: {
        top:10,
        fontSize: 22,
        fontWeight:'bold',
   
    },
    backBtn: {
        position: 'absolute',
        top: 35,
        left: 10,
        justifyContent:'center'
    },
    backText: {
        fontSize: 14,
        fontWeight:'bold'
    }
})

export default Header;