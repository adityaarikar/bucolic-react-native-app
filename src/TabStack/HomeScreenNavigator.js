import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import AddDeviceScreen from '../screen/AddDeviceScreen';

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="AddDeviceScreen"
        component={AddDeviceScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigator;
