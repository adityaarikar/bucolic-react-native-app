import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import constants from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomButton = props => {
  return (
    <TouchableOpacity
      style={{...styles.button, ...props.style}}
      onPress={props.onPress}>
      {props.icon ? (
        <Icon
          style={{alignSelf: 'center', marginRight: 7}}
          name={props.nameIcon}
          size={24}
        />
      ) : null}
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
    flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  title: {
    color: constants.black,
  },
});
