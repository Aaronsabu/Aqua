import React, { useState } from "react";
import {Text, View, StyleSheet, Switch, Image} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ToggleSwitch from 'toggle-switch-react-native';
import { StatusBar } from "expo-status-bar";

const ControlScreen = () => {

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
    };

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
        <Image style={styles.img} source={require('../src/img/AQUA.png')} />
        <View style = {styles.heading}>
          <Image style={styles.img2} source={require('../src/img/AquaSymbol.png')} />
          <Text style={styles.txt1}>CONTROL PANEL</Text>
        </View>
        <View style={styles.innerView}>
        {/* <Text style={styles.txt}>SPOUT 1</Text> */}

        <ToggleSwitch
           isOn={false}
           onColor="#00FFFF"
           offColor="grey"
           label="SPOUT 1"
           labelStyle={{color:"#00FFFF", fontSize: 20}}
           size="medium"
           onToggle={isOn => {isOn}}
/>
        </View>
        <View style={styles.innerView}>
        <Text style={styles.txt}>SPOUT 2</Text>

            <Switch 
                trackColor={{false:'grey', true:'#00FFFF'}}
                thumbColor={isEnable2 ? '#f4f3f4' : '#f4f3f4'}
                onValueChange={toggleSwitch2}
                value={isEnable2}
            />    

        </View>  

                <View style={styles.innerView}>
        <Text style={styles.txt}>SPOUT 3</Text>

            <Switch 
                trackColor={{false:'grey', true:'#00FFFF'}}
                thumbColor={isEnable3 ? '#f4f3f4' : '#f4f3f4'}
                onValueChange={toggleSwitch3}
                value={isEnable3}
            />

        </View>
        <View style={styles.innerView}>
        <Text style={styles.txt}>OVER RIDE</Text>

            <Switch 
                trackColor={{false:'grey', true:'#00FFFF'}}
                thumbColor={isEnable4 ? '#f4f3f4' : '#f4f3f4'}
                onValueChange={toggleSwitch4}
                value={isEnable4}
            />    
        </View>  
        <StatusBar style="light" />   
        </SafeAreaView>
    );
};

ControlScreen.navigationOptions = () => {
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
    txt1: {
        color:"#00FFFF",
        fontSize: 20,
        paddingTop: 5,
        paddingBottom: 30
    },
    innerView: {
        flexDirection:"row",
        paddingTop: 30
    },
    txt: {
        fontSize: 20,
        color:"#00FFFF",
        paddingTop:10,
        paddingRight:10
    }

});

export default ControlScreen;
