import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            emailID: '',
            password: '',
        }
    }

    userLogin = (emailID, password) => {
        firebase.auth().signInWithEmailAndPassword(emailID, password)
            .then((response) => {
                // Signed in 
                // ...
                return Alert.alert("Logged In Successfully!");
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                return Alert.alert(errorMessage);
            });
    }

    userSignup = (emailID, password) => {
        firebase.auth().createUserWithEmailAndPassword(emailID, password)
            .then((response) => {
                // Signed in 
                // ...
                return Alert.alert("Account Created!");
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                return Alert.alert(errorMessage);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Book Santa</Text>
                </View>
                <View>
                    <TextInput
                        placeholder="abc@example.com"
                        keyboardType="email-address"
                        onChangeText={
                            (text) => {
                                this.setState({
                                    emailID: text,
                                })
                            }
                        }
                        style={styles.loginBox}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Password"
                        onChangeText={
                            (text) => {
                                this.setState({
                                    password: text,
                                })
                            }
                        }
                        style={styles.loginBox}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            this.userLogin(this.state.emailID, this.state.password);
                        }}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.userSignup(this.state.emailID, this.state.password);
                        }}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    loginBox: {
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: '#000000',
        fontSize: 20,
        margin: 10,
        paddingLeft: 10,
    },
    title: {
        fontSize: 65,
        fontWeight: '300',
        paddingBottom: 30,
        color: '#FFA500'
    },
    button: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: "#ff9800",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8, },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        marginBottom: 20,
        marginTop: 20,
    },
    buttonText: {
        color: '#ffff',
        fontWeight: '200',
        fontSize: 20
    },
})