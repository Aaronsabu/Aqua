import React from 'react';
import {Text, View, StyleSheet, Platform, StatusBar, TouchableOpacity, Image, Button} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const MainScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>

       <TouchableOpacity>
          <Ionicons name="person" size={26} color="#00FFFF" />
        </TouchableOpacity>

        <Image style={styles.img} source={require('../img/AQUA.png')} />

        <Text style={styles.txt1}>Choose Your Application</Text>

        <View style={styles.innerView}>
         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MPanel')}>
           <Text style={styles.txt}>MONITOR</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CPanel')}>
           <Text style={styles.txt}>CONTROL</Text>
         </TouchableOpacity>
        </View>

        <StatusBar style="light" />  
      </SafeAreaView>
    );

};

MainScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"black",
     },
     txt1: {
      color: "#00FFFF",
      fontSize: 20,
      textAlign: "center",
      paddingBottom: "10%"
     },
     innerView: {
      alignItems: "center",
      paddingTop: "3%"
     },
     img: {
      padding: 10,
      alignItems: "center"
     },
     txt: {
      color: "#00FFFF",
      fontSize: 25,
      textAlign: "center"
     },
     button: {
      backgroundColor: 'grey',
      borderRadius: 20,
      padding: 10,
      marginBottom: "15%",
      width:"80%",
      shadowColor: '#303030',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.35,
    },
    test: {
      color: "blue"
    }
});

export default MainScreen;
