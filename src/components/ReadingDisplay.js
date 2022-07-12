import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import constants from '../constants';

const ReadingDisplay = props => {
  return (
    <View style={styles.readingDisplay}>
      <Text style={styles.readingTitle}>{props.title}</Text>
      <Text style={styles.reading}>{props.value}</Text>
    </View>
  );
};

export default ReadingDisplay;

const styles = StyleSheet.create({
  readingDisplay: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1,
    elevation: 2,
    width: '46%',
    height: 80,
    margin: '2%',
    backgroundColor: constants.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  readingTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  reading: {
    fontSize: 30,
    backgroundColor: constants.secondary,
    width: '100%',
    textAlign: 'center',
    padding: 5,
    borderRadius: 5,
    fontWeight: '600',
  },
});
