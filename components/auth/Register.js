import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../../database/firebase';
// const firebase = require('firebase');


export default class Register extends Component {

    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            isLoading: false
        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);

    }

  registerUser = () => {
      if(this.state.email === '' && this.state.password === '') {
          Alert.alert("Must enter email and password")
      } else {
          this.setState({
              isLoading: true,
          })
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then((res) => {
            res.user.updateProfile({
                displayName: this.state.displayName
            })            
            console.log('User created');
            this.setState({
                isLoading: false,
                displayName: '',
                email: '',
                password: ''
            })
            this.props.navigation.navigate('Login')
          }) 
      }
  }

    render() {
        if(this.state.isLoading) {
            return(
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E"/>
                </View>
            )
        }
        return(
            <View style={styles.container}>
                <TextInput style={styles.intput}
                placeholder="username"
                value={this.state.displayName}
                onChangeText={(val) => this.updateInputVal(val, 'displayName')}
                />

                <TextInput style={styles.intput}
                placeholder="email"
                value={this.state.email}
                onChangeText={(val) => this.updateInputVal(val, 'email')}
                />

                <TextInput style={styles.intput}
                placeholder="password" 
                secureTextEntry
                value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, 'password')}
                maxLength={15}
                />

                <Button 
                title="Sign Up"
                onPress={() => this.registerUser()}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    intput: {
        paddingBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        width: '100%',
        borderColor: '#ccc',
        borderBottomWidth: 1

    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});