import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IndividualDeviceScreen from '../screen/IndividualDeviceScreen';
import TimeSettingScreen from '../screen/TimeSettingScreen';
import DevicesScreen from '../screen/DevicesScreen';

const Stack = createStackNavigator();

const DevicesScreenNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="DevicesScreen">
      <Stack.Screen
        name="All Devices"
        component={DevicesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IndividualDeviceScreen"
        component={IndividualDeviceScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TimeSettingScreen"
        component={TimeSettingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default DevicesScreenNavigator;
