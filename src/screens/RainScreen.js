import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, Image, Switch, Animated} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Tank from '../tank/liquid';
import {db} from '../firebase/config';
import { ref, onValue, set } from 'firebase/database';
import { StatusBar } from "expo-status-bar";

const RainScreen = () => {

  const [isEnable, setIsEnable] = useState(false);
  const [relay, setRelay] = useState(null);

  const toggleSwitch = () => {
    setIsEnable(previousState => !previousState)
    const relayValue = isEnable ? 0 : 1;
    console.log("value is",relayValue);  
    setRelay(relayValue); 
   };
   set(ref(db, 'relay'), relay);

   const [data, setData] = useState([]);
   const starCountRef = ref(db);
   console.log("rain",data["rainTank "])
 
   useEffect(() => {
 
     onValue(starCountRef, (snapshot) => {
       const data = snapshot.val();  
       setData(data);
     })
   },[]);
   
    return (
        <SafeAreaView style={styles.container}>
          <Image style={styles.img} source={require('../img/AQUA.png')} />
          <View style = {styles.heading}>
            <Image style={styles.img2} source={require('../img/AquaSymbol.png')} />
            <Text style={styles.txt1}>RAIN WATER HARVEST</Text>
          </View>

          <View style={styles.innerView}>
            <Text style={styles.txt}>Rain Water Source</Text>

            <Switch 
                trackColor={{false:'grey', true:'#00FFFF'}}
                thumbColor={isEnable ? '#f4f3f4' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnable}
            />    
          </View>  
          <Text style={styles.txt2}>Rain Water Tank Level</Text>
          <View>
          <Tank percentage={20-(data["rainTank "])} />
          </View>
          <StatusBar style="light" />  
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
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
        fontSize: 25,
        paddingTop: "2%",
        paddingBottom: "10%"
      },
      innerView: {
        flexDirection:"row",
        paddingTop: "7%"
    },
    txt: {
      fontSize: 20,
      color:"#00FFFF",
      textAlign: "center",
      paddingTop:"3%",
      paddingRight:10
    },
  txt2 : {
    color:"#00FFFF",
    fontSize: 20,
    paddingTop: "20%"
  },
  progress: {
    paddingLeft: "50%",
    paddingBottom: "50%"
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
});

export default RainScreen;
