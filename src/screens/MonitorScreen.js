import React, { useState, useEffect } from "react";
import {Text, View, StyleSheet, Image, Animated, TouchableOpacity} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import Speedometer from "react-native-speedometer-chart";
import {db} from '../firebase/config';
import { ref, onValue, set } from 'firebase/database';

const MonitorScreen = () => {

  const [data, setData] = useState([]);
  const starCountRef = ref(db);


  useEffect(() => {

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();    
      console.log('distance: ', data.gesture);
      setData(data);
    })
  },[]);

  const limit = () => {
  if(data.totalMilliLitres>3000) {
    return (
      <Text>Your daily consumption limit has exceeded!</Text>
    )
  }
};

    return (
     <SafeAreaView style={styles.container}>
        <Image style={styles.img} source={require('../img/AQUA.png')} />
        <View style = {styles.heading}>
          <Image style={styles.img2} source={require('../img/AquaSymbol.png')} />
          <Text style={styles.txt1}>REAL TIME MONITOR</Text>
        </View>

     <View style={styles.innerView}>
        <Text style={styles.txt}>Flow Rate</Text>
        <View style={styles.progress}>
          <Speedometer
            value={data.flowRate}
            totalValue={50}
            internalColor="#00FFFF"
            innerColor="black"
            outerColor="grey"
            outerStroke="#da2128"
            showText
            text={`${data.flowRate}L/min`}
            textStyle={{ color: "#00FFFF", fontWeight: "bold"}}
          /> 
        </View>
     </View>

        <View style={styles.innerView}>  
          <Text style={styles.txt}>Total consumption</Text>
          <View style={styles.progress}>
          <Speedometer
            value={data.totalMilliLitres}
            totalValue={5000}
            internalColor="#00FFFF"
            innerColor="black"
            outerColor="grey"
            outerStroke="#da2128"
            showText
            text={`${data.totalMilliLitres}ml`}
            textStyle={{ color: "#00FFFF", fontWeight: "bold"}}
          /> 
          </View>
        </View> 
        <Text style={styles.limit}>{limit()}</Text>

          <StatusBar style="light" />  
     </SafeAreaView>
    );
};

MonitorScreen.navigationOptions = () => {
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
        fontSize: 20,
        paddingTop: 5
      },
      txt: {
        color:"#00FFFF",
        textAlign:"center",
        paddingRight: 200,
        paddingBottom: 20,
        
      },
      row: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: "50%",
        paddingRight: "40%"
      },
      text: {
        color: "white",
        fontSize: 30,
      },
      txt2: {
        fontWeight:"bold",
        textAlign:"center",
        paddingTop: 30,
        paddingBottom:20
      },     
      innerView: {
        marginTop: "15%",
        alignItems: "center"
      },
      progress: {
        paddingTop: 20,
        alignContent:"center"
      },
      limit: {
        fontSize:14,
        color: "red",
        paddingTop:20
      }
});

export default MonitorScreen;