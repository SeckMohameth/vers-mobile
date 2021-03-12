import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../../database/firebase';

export default class Login extends Component {

    constructor(){
        super();
        this.state = {
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

    loginUser = () => {
        if(this.state.email === '' && this.state.password === ''){
            Alert.alert("Enter details")
        } else {
            this.setState({
                isLoading: true
            })
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
            console.log(res)
            console.log('User logged-in!');
            this.setState({
                isLoading: false,
                email: '',
                password: ''
            })
            this.props.navigation.navigate('Home')
            })
            .cath(error => this.setState({ errorMessage: error.message }))
        }
    }


    render() {
        if(this.setState.isLoading) {
            return(
                <View style={styles.preloader}>
                  <ActivityIndicator size="large" color="#9E9E9E"/>
                </View>
              )
        }
        return (
            <View style={styles.container}>

                <TextInput style={styles.intput}
                value={this.state.email}
                placeholder="email"
                onChangeText={(val) => this.updateInputVal(val, 'email')}
                />
                <TextInput style={styles.intput}
                placeholder="password"
                value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, 'password')}
                secureTextEntry
                />

                <Button
                title="Sign In"
                onPress={() => this.loginUser()}
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