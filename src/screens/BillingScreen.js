import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { db } from '../firebase/config';
import { ref, onValue, set } from 'firebase/database';

const BillingScreen = () => {

  const [inputValue, setInputValue] = useState('');
  const [compareValue, setCompareValue] = useState('');
  const [data, setData] = useState(null);
  const[compareData, setCompareData] = useState(null);
  const [billAmount, setBillAmount] = useState(null);
  const [comparePressed, setComparePressed] = useState(false);
  const [litreValue, setLitreValue] = useState(false);
  const [lastData, setLastData] = useState('');

  const pressed = () => {
    setComparePressed(true);
  };

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const compareInputChange = (text) => {
    setCompareValue(text);

  };

  const handleInputSubmit = () => {
    fetchData();
  };

  const compareInputSubmit = () => {
    compareFetchData();
    setLitreValue(true);
  };

  const fetchData = () => {
    const starCountRef = ref(db, `/billing/month/${inputValue}`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
      setBillAmount(data * 2); // Calculate bill amount based on liters of water used
      console.log("Input value is",inputValue);
    });
  };

  const compareFetchData = () => {
    const starCountRef = ref(db, `/billing/month/${compareValue}`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setCompareData(data);
      console.log("compare data is", compareData);
    });
  };

  console.log("org value is", data);

  const litre = () => {
   if(data<compareData) {
    const orgValue = compareData-data;
    //setLastData(data);
    return (
      <Text>You have saved {orgValue} litres of water!</Text>
    );
   }
   else {
    const elsedata = data-compareData;
    //setLastData(elsedata);
    return (
      <Text>You have used {elsedata} litres extra </Text>
    );
   }
  }

  useEffect(() => {
    if (inputValue !== '') {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (compareValue !== '') {
      compareFetchData();
    }
  }, []);

  useEffect(() => {
    if (billAmount !== null) {
      set(ref(db, '/amount/month/may'), billAmount)
        .then(() => console.log('Bill amount uploaded to Firebase'))
        .catch((error) => console.log(error));
    }
  }, [billAmount]);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.img} source={require('../img/AQUA.png')} />
      <View style={styles.heading}>
        <Image style={styles.img2} source={require('../img/AquaSymbol.png')} />
        <Text style={styles.txt1}>BILLING HISTORY</Text>
      </View>
      <View style={styles.inner}>
      <Text style={styles.txt3}>ENTER A MONTH:</Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={handleInputChange}
          onSubmitEditing={handleInputSubmit}
        />
        <Text style={styles.txt3}>LITRES OF WATER USED:</Text>
        <TextInput
          style={styles.input}
          value={data !== null ? data.toString() : ''}
          editable={false}
        />
        <Text style={styles.txt3}>BILL AMOUNT(Rs):</Text>
        <TextInput
          style={styles.input}
          value={billAmount !== null ? billAmount.toString() : ''}
          editable={false}
        />
        <View style={styles.compare}>
          <TouchableOpacity style={styles.compareButton} onPress = {pressed}>
            <Text style={styles.txt}>COMPARE WATER USAGE</Text>
          </TouchableOpacity>
          {comparePressed && (
          <>
          <TextInput
          style={styles.input}
          value={compareValue}
          placeholder="Enter a month"
          onChangeText={compareInputChange}
          onSubmitEditing={compareInputSubmit}
        />
        {litreValue && (
          <Text style={styles.txtcompare}>{litre()}</Text>
        )}
          </>
        )}
        
        </View>
      </View>
    </SafeAreaView>
  );
};




BillingScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"black",
        alignItems: "center",
        paddingTop:20
    },
    img: {
      height:100,
      width:110
    },
    heading: {
      flexDirection: "row",
    },
    img2: {
      height: 40,
      width: 40
    },
    txt: {
      color:"#00FFFF",
      textAlign:"center",
      fontSize: 22
    },
    txt1: {
      color:"#00FFFF",
      fontSize: 25,
      paddingTop: 5,
      paddingBottom: 30
    },
    txt2: {
      color:"#00FFFF",
      fontSize:21,
      textAlign:"center",
      padding: "1%"
    },
    inner: {
      paddingTop: "5%",
      paddingBottom: "3%"
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
    txt3:{
      fontSize: 20,
      color: "#00FFFF",
      textAlign:"center"
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor:"white",
      color:"black"
    },
    month: {
      height: 40,
      alignContent:"center",
      width: 100,
      borderWidth: 1,
      backgroundColor:"white",
      color:"black"
    },
    compare: {
      paddingTop:20,
    },
    press: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor:"white",
      color:"black",
    },
    compareButton: {
      backgroundColor: 'grey',
      borderRadius: 20,
      padding: 10,
      marginBottom: 20,
      width:300,
      height: 60,
      shadowColor: '#303030',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.35
    },
    txtcompare: {
      color: "#00FFFF",
      fontSize:15
    }

});

export default BillingScreen;