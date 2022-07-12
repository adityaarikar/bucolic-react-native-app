import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screen/ProfileScreen';

const Stack = createStackNavigator();

const ProfileScreenNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileScreenNavigator;
