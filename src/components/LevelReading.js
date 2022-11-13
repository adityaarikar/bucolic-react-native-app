import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Bar} from 'react-native-progress';
import constants from '../constants';

const LevelReading = props => {
  return (
    <View style={styles.levelReading}>
      <Text style={styles.title}>Water Level</Text>
      <Bar progress={props.waterL} color={constants.primary} />
    </View>
  );
};

export default LevelReading;

const styles = StyleSheet.create({
  levelReading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: constants.black,
  },
});
