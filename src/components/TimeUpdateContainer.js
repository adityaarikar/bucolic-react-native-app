import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ReadingDisplay from './ReadingDisplay';
import constants from '../constants';

const TimeUpdateContainer = props => {
  return (
    <View style={styles.timeDisplayMain}>
      <View style={styles.timeDisplayContainer}>
        <Text style={styles.timeHeading}>{props.title}</Text>
      </View>
      <View style={styles.timeValueMain}>
        <ReadingDisplay
          //   style={{width: '%'}}
          title={props.onTitle}
          value={props.onValue}
        />
        <ReadingDisplay
          //   style={{width: '85%'}}
          title={props.offTitle}
          value={props.offValue}
        />
      </View>
    </View>
  );
};

export default TimeUpdateContainer;

const styles = StyleSheet.create({
  timeDisplayMain: {
    marginBottom: '5%',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: constants.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  timeDisplayContainer: {
    width: '100%',
    backgroundColor: constants.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // borderBottomWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderColor: constants.primary,
  },
  timeHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: constants.black,
  },
  timeValueMain: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
