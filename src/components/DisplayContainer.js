import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ReadingDisplay from './ReadingDisplay';
import constants from '../constants';
import LevelReading from './LevelReading';
import LineBreak from './LineBreak';
import TimingDisplay from './TimingDisplay';

const DisplayContainer = () => {
  return (
    <View style={styles.main}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Heading</Text>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.readingContainer}>
          <ReadingDisplay title="Temperature" value="20.23 °C" />
          <ReadingDisplay title="Humidity" value="20.23 %" />
          <ReadingDisplay title="Air Quality" value="20.23" />
        </View>
        <LineBreak />
        <LevelReading />
        <LineBreak />
        <TimingDisplay />
      </View>
    </View>
  );
};

export default DisplayContainer;

const styles = StyleSheet.create({
  main: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    elevation: 2,
    width: '90%',
    borderRadius: 10,
  },
  headingContainer: {
    width: '100%',
    backgroundColor: constants.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  innerContainer: {
    padding: 20,
  },
  readingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
