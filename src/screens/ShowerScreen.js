import React, { useState } from "react";
import {Text, View, StyleSheet, Switch, Image} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import {db} from '../firebase/config';
import { ref, set } from 'firebase/database';

const ShowerScreen = () => {

    const [shower, setShower] = useState(null);

    const [isEnable, setIsEnable] = useState(false);
    const [text, setText] = useState('Inactive');

    const [isEnable2, setIsEnable2] = useState(false);
    const [text2, setText2] = useState('Inactive');

    const [isEnable3, setIsEnable3] = useState(false);
    const [text3, setText3] = useState('Inactive');

    const [isEnable4, setIsEnable4] = useState(false);
    const [text4, setText4] = useState('Inactive');

    const toggleSwitch = () => {
        setIsEnable(previousState => !previousState)
        const showerValue = isEnable ? 0 : 1;
        console.log("shower value is",showerValue);  
        setShower(showerValue); 
       };
       set(ref(db, 'Shower'), shower);

    const toggleSwitch2 = () => {
        setIsEnable2(previousState => !previousState)
       };

       const toggleSwitch3 = () => {
        setIsEnable3(previousState => !previousState)
       };

       const toggleSwitch4 = () => {
        setIsEnable4(previousState => !previousState)
       };

    return (
        <SafeAreaView style = {styles.container}>
          <Image style={styles.img} source={require('../img/AQUA.png')} />
          <View style = {styles.heading}>
            <Image style={styles.img2} source={require('../img/AquaSymbol.png')} />
            <Text style={styles.text}>BATHROOM CONTROL PANEL</Text>
          </View>
          <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.txt}>SHOWER 1</Text>

            <Switch 
                trackColor={{false:'grey', true:'#00FFFF'}}
                thumbColor={isEnable ? '#f4f3f4' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnable}
            />    
          </View> 

          <View style={styles.innerView}>
            <Text style={styles.txt}>SHOWER 2</Text>

            <Switch 
                trackColor={{false:'grey', true:'#00FFFF'}}
                thumbColor={isEnable2 ? '#f4f3f4' : '#f4f3f4'}
                onValueChange={toggleSwitch2}
                value={isEnable2}
            />    
          </View>  

          <View style={styles.innerView}>
            <Text style={styles.txt}>SHOWER 3</Text>
            <Switch 
                trackColor={{false:'grey', true:'#00FFFF'}}
                thumbColor={isEnable3 ? '#f4f3f4' : '#f4f3f4'}
                onValueChange={toggleSwitch3}
                value={isEnable3}
            />
          </View>
          
          <View style={styles.innerView}>
            <Text style={styles.txt1}>OVER RIDE</Text>
            <Switch 
                trackColor={{false:'grey', true:'#00FFFF'}}
                thumbColor={isEnable4 ? '#f4f3f4' : '#f4f3f4'}
                onValueChange={toggleSwitch4}
                value={isEnable4}
            />    
          </View> 
          </View> 
          <StatusBar style="light" />   
        </SafeAreaView>
    );
};

ShowerScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor:"black",
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
    text: {
        color:"#00FFFF",
        fontSize: 20,
        paddingTop: 5,
        paddingBottom: 30
    },
    view: {
        paddingTop: "20%"
    },
    innerView: {
        flexDirection:"row",
        paddingTop: 30
    },
    txt: {
        fontSize: 20,
        color:"#00FFFF",
        paddingTop:"3%",
        paddingRight:"17%"
    },
    txt1: {
        fontSize: 20,
        color:"#00FFFF",
        paddingTop:"3%",
        paddingRight:"17%"
    }

});

export default ShowerScreen;