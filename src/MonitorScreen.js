import React, {useState} from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import Speedometer from "react-native-speedometer-chart";

const MonitorScreen = () => {
    //const [value, setValue] = useState(0);
   // const onChange = () => setValue({ value: parseInt(value) });
    return (
     <View style={styles.container}>
        <Image style={styles.img} source={require('../src/img/AQUA.png')} />
        <View style = {styles.heading}>
          <Image style={styles.img2} source={require('../src/img/AquaSymbol.png')} />
          <Text style={styles.txt1}>REAL TIME MONITOR</Text>
        </View>

     <View style={styles.innerView}>
     <Text style={styles.txt}>Flow Rate</Text>
          <Speedometer
            value={0}
            totalValue={1000}
            outerColor="#d3d3d3"
            outerStroke="#da2128"
            showText
            text="0ml/sec"
            textStyle={{ color: "blue", fontWeight: "bold"}}
          />  
          </View>
          <View style={styles.innerView1}>  
          <Text style={styles.txt}>Total Volume</Text>
          <Speedometer
            value={0}
            totalValue={1000}
            outerColor="#d3d3d3"
            outerStroke="#da2128"
            showText
            text="0m3"
            textStyle={{ color: "blue", fontWeight: "bold"}}
          /> 
          </View> 


     </View>
    );
};

MonitorScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};


const styles = StyleSheet.create({
    container: {
        paddingTop:30,
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
        paddingBottom:20,
        paddingRight: 250
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
      }

});

export default MonitorScreen;