import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import constants from '../constants';

const ReadingDisplay = props => {
  return (
    <View style={{...styles.readingDisplay, ...props.style}}>
      <Text style={styles.readingTitle}>{props.title}</Text>
      <Text style={styles.reading}>{props.value}</Text>
    </View>
  );
};

export default ReadingDisplay;

const styles = StyleSheet.create({
  readingDisplay: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    width: '46%',
    height: 80,
    margin: '2%',
    backgroundColor: constants.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: constants.primary,
  },
  readingTitle: {
    textAlign: 'center',
    justifyContent: 'center',
    height: '40%',
    fontSize: 22,
    fontWeight: 'bold',
    color: constants.black,
  },
  reading: {
    height: '60%',
    fontSize: 30,
    backgroundColor: constants.secondary,
    width: '100%',
    textAlign: 'center',
    padding: 5,
    borderRadius: 5,
    fontWeight: '600',
    color: constants.black,
  },
});
