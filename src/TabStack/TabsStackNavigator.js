import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreenNavigator from './HomeScreenNavigator';
import DevicesScreenNavigator from './DevicesScreenNavigator';
import ProfileScreenNavigator from './ProfileScreenNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import constants from '../constants';

const Stack = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarActiveTintColor: constants.primary,
        }}
        component={HomeScreenNavigator}
      />
      <Stack.Screen
        name="Devices"
        component={DevicesScreenNavigator}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="microchip" color={color} size={size} />
          ),
          tabBarActiveTintColor: constants.primary,
        }}
      />
    </Stack.Navigator>
  );
};

export default TabStack;
