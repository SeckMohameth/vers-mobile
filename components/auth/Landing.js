import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';


const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Button 
        title="Login" 
        onPress={() => navigation.navigate('Login')}
        />
        <Button
         title="Register"
         onPress={() => navigation.navigate('Register')}
         />
    </View>
  );
}

export default Landing;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});