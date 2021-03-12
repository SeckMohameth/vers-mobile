import React, { Component } from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import firebase from '../database/firebase';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            uid: ''
        }
    }

    signOut = () => {
        firebase.auth().signOut().then(() => {
            this.props.navigation.navigate('Login')
        })
        .catch(error => this.setState({errorMessage: error.message}))
    }

    render() { 
        this.state = {
            displayName: firebase.auth().currentUser.displayName,
            uid: firebase.auth().currentUser.uuid
        }
        return(
            <View style={styles.container}>
                <Text>Welcome to VRS, {this.state.displayName}</Text>
                <Text>UID: {this.state.uid}</Text>


                <Button 
                title="Log Out"
                onPress={() => this.signOut()}
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
});