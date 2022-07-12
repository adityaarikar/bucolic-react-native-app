import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import constants from '../constants';

const LineBreak = () => {
  return <View style={styles.breakLine} />;
};

export default LineBreak;

const styles = StyleSheet.create({
  breakLine: {
    marginVertical: 10,
    height: 2,
    backgroundColor: constants.primary,
    width: '100%',
  },
});
