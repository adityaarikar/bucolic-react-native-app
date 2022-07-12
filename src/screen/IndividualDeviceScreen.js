import {StyleSheet, Text, View, Button, Switch} from 'react-native';
import React from 'react';
import {useState} from 'react';
import constants from '../constants';
import DisplayContainer from '../components/DisplayContainer';

const IndividualDeviceScreen = props => {
  const deviceIP = props.route.params.deviceIP;
  const [isLedOn, setisLedOn] = useState(false);
  const toggleLed = () => {
    if (isLedOn) {
      const res = fetch(`http://${deviceIP}/ledoff`);
      setisLedOn(false);
      console.log('LED is OFF');
    } else {
      const res = fetch(`http://${deviceIP}/ledon`);
      setisLedOn(true);
      console.log('LED is ON');
    }
  };

  const [isFanON, setIsFanOn] = useState(false);
  const toggleFan = () => {
    if (isLedOn) {
      fetch(`http://${deviceIP}/fanoff`);
      setIsFanOn(false);
      console.log('FAN is OFF');
    } else {
      fetch(`http://${deviceIP}/fanon`);
      setIsFanOn(true);
      console.log('FAN is ON');
    }
  };

  return (
    <View style={styles.main}>
      <DisplayContainer style={styles.displayContainer} />
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Water"
          color={constants.primary}
          onPress={() => {
            props.navigation.navigate('TimeSettingScreen', {
              name: 'Water Time Settings',
            });
          }}
        />
        <Button
          title="Fan"
          color={constants.primary}
          onPress={() => {
            props.navigation.navigate('TimeSettingScreen', {
              name: 'Fan Time Settings',
            });
          }}
        />
        <Button
          title="Light"
          color={constants.primary}
          onPress={() => {
            props.navigation.navigate('TimeSettingScreen', {
              name: 'Light Time Settings',
            });
          }}
        />
        <Button
          title="Reset"
          color={constants.primary}
          // onPress={}
        />
      </View>
    </View>
  );
};

export default IndividualDeviceScreen;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayContainer: {
    width: '90%',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
