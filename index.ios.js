/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import * as firebase from "firebase";

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var config = {
    apiKey: "AIzaSyBofbg_x_sanlv8S5eWXg3IEEh3UGBYxE4",
    authDomain: "mapapp-9753c.firebaseapp.com",
    databaseURL: "https://mapapp-9753c.firebaseio.com",
    storageBucket: "mapapp-9753c.appspot.com",
    messagingSenderId: "701872349104"
  };
  firebase.initializeApp(config);

class Map_app extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Map_app', () => Map_app);
