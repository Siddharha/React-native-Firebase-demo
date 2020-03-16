import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCDHJ2Z5bikQ2J1zLDjiZe2y8g_bp_K1SU",
  authDomain: "react-project-demo-1d8c0.firebaseapp.com",
  databaseURL: "https://react-project-demo-1d8c0.firebaseio.com",
  projectId: "react-project-demo-1d8c0",
  storageBucket: "react-project-demo-1d8c0.appspot.com",
  messagingSenderId: "346041444430",
  appId: "1:346041444430:web:570bdf1e34493bb9803b1f"
};

firebase.initializeApp(firebaseConfig);
let dbRef = firebase.database().ref()
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Press Button to add Data to Firebase DB</Text>
      <TouchableOpacity style={styles.submitButton} onPress={() => {
        let info = {
          'name':'Siddhartha',
          'address':'Unknown',
          'number':9564751914
        }
    dbRef.child('Demo').set(info);
      //this.login(this.state.email, this.state.password)
    }}>
      <Text style={styles.submitButtonText}> Add to Firebase Realtime DB </Text>
    </TouchableOpacity>
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
  submitButton: {
    backgroundColor: '#00bcd4',
    marginTop: 10
    
  },
  submitButtonText: {
    color: '#fff',
    margin: 5
  }

});
