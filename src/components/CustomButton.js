import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import constants from '../constants';

const CustomButton = props => {
  return (
    <TouchableOpacity
      style={{...styles.button, ...props.style}}
      onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 150,
    margin: 10,
    backgroundColor: constants.secondary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: constants.primary,
    zIndex: 99,
  },
  title: {
    color: constants.black,
  },
});
