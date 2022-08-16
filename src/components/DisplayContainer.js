import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ReadingDisplay from './ReadingDisplay';
import constants from '../constants';
import LevelReading from './LevelReading';
import LineBreak from './LineBreak';
import TimingDisplay from './TimingDisplay';

const DisplayContainer = props => {
  return (
    <View style={styles.main}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Heading</Text>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.readingContainer}>
          <ReadingDisplay
            title="Temperature"
            value={Math.round(props.responce.temp * 100) / 100}
          />
          <ReadingDisplay title="Humidity" value={props.responce.humid} />
          <ReadingDisplay title="Air Quality" value={props.responce.airQual} />
        </View>
        <LineBreak />
        <LevelReading />
        <LineBreak />
        <TimingDisplay
          fanOn={props.responce.fanOn}
          fanOff={props.responce.fanOff}
          lightOn={props.responce.lightOn}
          lightOff={props.responce.lightOff}
          waterOn={props.responce.waterOn}
          waterOff={props.responce.waterOff}
        />
      </View>
    </View>
  );
};

export default DisplayContainer;

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    width: '90%',
    borderRadius: 20,
    alignSelf: 'center',
    borderColor: constants.primary,
  },
  headingContainer: {
    width: '100%',
    backgroundColor: constants.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderColor: constants.primary,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: constants.black,
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
