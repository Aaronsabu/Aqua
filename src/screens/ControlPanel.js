import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";

const ControlPanel = ({navigation}) => {

    return (
     <SafeAreaView style={styles.container}>
        <Image style={styles.img} source={require('../img/AQUA.png')} />
        <View style = {styles.heading}>
          <Image style={styles.img2} source={require('../img/AquaSymbol.png')} />
          <Text style={styles.txt1}>CONTROL PANEL</Text>
        </View>
        <Text style={styles.txt2}>Choose Your Application</Text>

        <View style={{paddingTop: 20}}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Shower')}>
            <Text style={styles.txt}>SHOWER</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Control')}>
            <Text style={styles.txt}>SPOUTS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.txt}>GARDEN</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.txt}>NIGHT</Text>
          </TouchableOpacity> */}
        </View>

        <StatusBar style="light" />  
     </SafeAreaView>
    );
};

ControlPanel.navigationOptions = () => {
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
        paddingBottom: 25
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

export default ControlPanel;