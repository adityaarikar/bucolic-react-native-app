import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React from 'react';
import TimeSelector from '../components/TimeSelector';
import constants from './../constants';

const TimeSettingScreen = props => {
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>{props.route.params.name}</Text>
      <View style={styles.timeContainer}>
        <TimeSelector title={'On Time'} style={styles.timeBox} />
        <TimeSelector title={'Off Time'} />
      </View>
      <Button title="Done" style={styles.button} color={constants.primary} />
    </View>
  );
};

export default TimeSettingScreen;

const styles = StyleSheet.create({
  main: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: constants.secondary,
    borderWidth: 2,
    borderRadius: 10,
    paddingBottom: 20,
  },
  heading: {
    backgroundColor: constants.primary,
    width: '100%',
    fontSize: 24,
    fontWeight: '500',
    borderRadius: 10,
    textAlign: 'center',
    padding: 15,
    marginBottom: 15,
  },
  button: {
    color: constants.primary,
  },
});
