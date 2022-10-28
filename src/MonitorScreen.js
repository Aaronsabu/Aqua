import React, {useState} from "react";
import {Text, View, StyleSheet, Image, Animated, TouchableOpacity} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import  LiquidProgress from "react-native-liquid-progress";
import { StatusBar } from "expo-status-bar";
import Speedometer from "react-native-speedometer-chart";

const MonitorScreen = () => {
  const [value, setValue] = useState(0);
   // const onChange = () => setValue({ value: parseInt(value) });
    return (
     <SafeAreaView style={styles.container}>
        <Image style={styles.img} source={require('../src/img/AQUA.png')} />
        <View style = {styles.heading}>
          <Image style={styles.img2} source={require('../src/img/AquaSymbol.png')} />
          <Text style={styles.txt1}>REAL TIME MONITOR</Text>
        </View>

     <View style={styles.innerView}>
     <Text style={styles.txt}>Flow Rate</Text>

          <Speedometer
            value={100}
            totalValue={1000}
            outerColor="grey"
            outerStroke="#da2128"
            showText
            text="100ml/sec"
            textStyle={{ color: "#00FFFF", fontWeight: "bold"}}
          /> 
     

          </View>
          <View style={styles.innerView1}>  
          <Text style={styles.txt}>Total Volume</Text>
          <View style={styles.progress}>
          <LiquidProgress
            backgroundColor={"white"}
            frontWaveColor={"blue"}
            backWaveColor={"skyblue"}
            fill={.8}
            size={500}
            customMask={<View style={{ backgroundColor: "red", width: 200, height: 200, borderRadius: 360}}></View>}
          >
          <Animated.View style={styles.row}>
            <Text style={styles.text}>{(.8 * 100).toFixed(2)}%</Text>
          </Animated.View>
         </LiquidProgress>
         </View>
 
          </View> 

          <StatusBar style="auto" />  
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
        backgroundColor: "black"
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
        paddingRight: 250
      },
      row: {
        alignSelf: "center",
        flexDirection: "row",
        height: 70,
        paddingRight: 50
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
        marginTop: 50,
      },
      innerView1: {
        marginTop: 50
      },
      progress: {
        borderColor: "red",
        borderWidth:1,
        paddingLeft: 200
      }

});

export default MonitorScreen;
