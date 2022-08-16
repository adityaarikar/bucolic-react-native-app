import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import constants from '../constants';

export default CustomHeader = props => {
  if (props.isBack) {
    return (
      <View style={styles.titleView1}>
        <Icon
          name="arrow-left"
          color={'black'}
          size={25}
          onPress={() => props.onPress.goBack()}
        />
        <Text style={[styles.titleText, {flex: 2}]}>{props.title}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.titleView2}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  titleView1: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '10%',
    paddingLeft: 20,
    backgroundColor: constants.primary,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 10,
  },
  titleView2: {
    width: '100%',
    alignItems: 'center',
    height: '10%',
    justifyContent: 'center',
    backgroundColor: constants.primary,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
    marginBottom: 10,
  },
  titleText: {
    paddingLeft: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: constants.black,
  },
});
