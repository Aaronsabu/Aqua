import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/screens/MainScreen";
import MonitorScreen from "./src/screens/MonitorScreen";
import ControlScreen from "./src/screens/ControlScreen"
import ControlPanel from "./src/screens/ControlPanel";
import MonitorPanel from "./src/screens/MonitorPanel";
import BillingScreen from "./src/screens/BillingScreen";
import RainScreen from "./src/screens/RainScreen";
import ShowerScreen from "./src/screens/ShowerScreen";
import GardenScreen from "./src/screens/GardenScreen";

const Stack = createStackNavigator();

export default App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="MPanel" component={MonitorPanel} />
        <Stack.Screen name="CPanel" component={ControlPanel} />
        <Stack.Screen name="Billing" component={BillingScreen} />
        <Stack.Screen name="Shower" component={ShowerScreen} />
        <Stack.Screen name="Garden" component={GardenScreen} />
        <Stack.Screen name="Control" component={ControlScreen} />
        <Stack.Screen name="Rain" component={RainScreen} />
        <Stack.Screen name="Monitor" component={MonitorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
