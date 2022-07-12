import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import constants from '../constants';

const DeviceList = props => {
  if (props.devices.length == 0) {
    return (
      <View>
        <Text>You need to add a device.</Text>
      </View>
    );
  } else {
    return props.devices.map(device => (
      <TouchableOpacity
        key={device.deviceName}
        style={styles.deviceCard}
        onPress={() =>
          props.navigation.navigate('IndividualDeviceScreen', {
            deviceIP: device.deviceIP,
          })
        }>
        <Text style={styles.deviceNameContainer}>
          Device Name : {device.deviceName}
        </Text>
      </TouchableOpacity>
    ));
  }
};

const DevicesScreen = ({navigation}) => {
  const devices = useSelector(state => state.devicesSlice.devices);
  console.log('Devices', devices);

  return (
    <View style={styles.main}>
      <DeviceList devices={devices} navigation={navigation} />
    </View>
  );
};

export default DevicesScreen;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  deviceCard: {
    backgroundColor: constants.primary,
    width: '90%',
    height: 60,
    marginVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deviceNameContainer: {
    fontSize: 24,
  },
});
