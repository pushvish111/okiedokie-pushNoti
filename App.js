import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PushNotification from 'react-native-push-notification';

export default function App() {
  componentDidMount()
  console.log('Did mount');

  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
      },
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
      },

      //this id is of the firebase user id
      senderID: '719007178572',

      popInitialNotification: true,
      requestPermissions: true,
  })
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
});
