import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import constants from '../constants';

const TimingDisplay = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.headingContainer}></View>
        <View style={styles.timeHeading}>
          <Text style={styles.timeHeadingTitle}>On Time</Text>
        </View>
        <View style={styles.timeHeading}>
          <Text style={styles.timeHeadingTitle}>Off Time</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingTitle}>Light</Text>
        </View>
        <View style={styles.timeHeading}>
          <Text style={styles.timeValue}>{props.lightOn}</Text>
        </View>
        <View style={styles.timeHeading}>
          <Text style={styles.timeValue}>{props.lightOff}</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingTitle}>Fan</Text>
        </View>
        <View style={styles.timeHeading}>
          <Text style={styles.timeValue}>{props.fanOn}</Text>
        </View>
        <View style={styles.timeHeading}>
          <Text style={styles.timeValue}>{props.fanOff}</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingTitle}>Water</Text>
        </View>
        <View style={styles.timeHeading}>
          <Text style={styles.timeValue}>{props.waterOn}</Text>
        </View>
        <View style={styles.timeHeading}>
          <Text style={styles.timeValue}>{props.waterOff}</Text>
        </View>
      </View>
    </View>
  );
};

export default TimingDisplay;

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingContainer: {
    width: 120,
  },
  timeHeading: {
    alignItems: 'center',
    width: 80,
  },
  timeHeadingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: constants.black,
  },
  headingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: constants.black,
  },
  timeValue: {
    textAlign: 'center',
    width: 80,
    fontWeight: 'bold',
    color: constants.black,
  },
});
