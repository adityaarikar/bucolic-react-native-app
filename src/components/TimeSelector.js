import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectBox from './SelectBox';

const TimeSelector = props => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.boxes}>
        <SelectBox />
        <SelectBox />
        <SelectBox />
      </View>
    </View>
  );
};

export default TimeSelector;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    marginRight: 20,
  },
  boxes: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
