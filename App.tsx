import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, Button, ToastAndroid } from 'react-native';
import { func } from 'prop-types';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.header}>Hello World!!</Text>
      <Button onPress={buttonPressed} title="Press me!!"  color="black" ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize:24,
    color: 'red',
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});

function buttonPressed () {
  ToastAndroid.show("Button tapped", ToastAndroid.SHORT);
}