import React from "react";
import {Text, View, StyleSheet, Image, Animated, TouchableOpacity} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";

const MonitorPanel = ({navigation}) => {

    return (
     <SafeAreaView style={styles.container}>
        <Image style={styles.img} source={require('../img/AQUA.png')} />
        <View style = {styles.heading}>
          <Image style={styles.img2} source={require('../img/AquaSymbol.png')} />
          <Text style={styles.txt1}>MONITOR PANEL</Text>
        </View>
        <Text style={styles.txt2}>Choose Your Application</Text>

        <View style={{paddingTop: 20}}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Rain')}>
            <Text style={styles.txt}>RAIN WATER HARVEST</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Monitor')}>
            <Text style={styles.txt}>REAL TIME MONITOR</Text>
          </TouchableOpacity>
{/* 
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Leakage')}>
            <Text style={styles.txt}>LEAKAGE DETECTION</Text>
          </TouchableOpacity> */}

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Billing')}>
            <Text style={styles.txt}>BILLING HISTORY</Text>
          </TouchableOpacity>
        </View>

          <StatusBar style="light" />  
     </SafeAreaView>
    );
};

MonitorPanel.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        backgroundColor: "black",
      },
      img: {
        height:100,
        width:110
      },
      heading: {
        flexDirection: "row"
      },
      img2: {
        height: 40,
        width: 40
      },
      txt1: {
        color:"#00FFFF",
        fontSize: 25,
        paddingTop: 5,
        paddingBottom: 30
      },
      txt2: {
        color: "#00FFFF",
        fontSize: 20,
        textAlign: "center",
        paddingBottom: 60
       },
       button: {
        backgroundColor: 'grey',
        borderRadius: 20,
        padding: 10,
        marginBottom: 50,
        width:300,
        height: 60,
        shadowColor: '#303030',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
      },
      txt: {
        color:"#00FFFF",
        textAlign:"center",
        fontSize: 22
      }
});

export default MonitorPanel;