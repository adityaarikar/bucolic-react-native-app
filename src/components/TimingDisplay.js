import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TimingDisplay = () => {
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
          <Text style={styles.timeValue}>2:30</Text>
        </View>
        <View style={styles.timeHeading}>
          <Text style={styles.timeValue}>3:30</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingTitle}>Fan</Text>
        </View>
        <View style={styles.timeHeading}>
          <Text style={styles.timeValue}>2:30</Text>
        </View>
        <View style={styles.timeHeading}>
          <Text style={styles.timeValue}>3:30</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingTitle}>Water</Text>
        </View>
        <View style={styles.timeHeading}>
          <Text style={styles.timeValue}>2:30</Text>
        </View>
        <View style={styles.timeHeading}>
          <Text style={styles.timeValue}>3:30</Text>
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
  },
  headingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeValue: {
    textAlign: 'center',
    width: 80,
    fontWeight: 'bold',
  },
});
