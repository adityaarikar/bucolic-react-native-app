import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import constants from '../constants';
import CustomHeader from '../components/CustomHeader';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {deleteDevice} from '../redux/slice/deviceSlice';

const DeviceList = props => {
  const dispatch = useDispatch();

  const deleteDeviceHandler = deviceName => {
    console.log('Delete pressed');
    dispatch(deleteDevice(deviceName));
  };

  if (props.devices.length == 0) {
    return (
      <View
        style={{...styles.deviceCard, flexDirection: 'column', height: 200}}>
        <Text>Sorry...!</Text>
        <Text>You have not added any device.</Text>
        <Text>Please add the device first..</Text>
        <CustomButton
          title="Add Device"
          onPress={() => props.navigation.navigate('AddDeviceScreen')}
        />
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
            deviceName: device.deviceName,
            deviceType: device.deviceType,
          })
        }>
        {device.deviceType === 'Mushroom' ? (
          <Icon name="mushroom" color={constants.primary} size={80} />
        ) : (
          <Icon name="air-purifier" color={constants.primary} size={80} />
        )}
        <View style={styles.deviceDetails}>
          <Text style={styles.deviceNameContainer}>
            Device Name : {device.deviceName}
          </Text>
          <Text style={styles.deviceNameContainer}>
            Device Type : {device.deviceType}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => deleteDeviceHandler(device.deviceName)}>
          <Icon name="delete" color={'red'} size={30} />
        </TouchableOpacity>
      </TouchableOpacity>
    ));
  }
};

const DevicesScreen = ({navigation}) => {
  const devices = useSelector(state => state.devicesSlice.devices);

  return (
    <View style={styles.main}>
      <CustomHeader isBack={false} title="Device" />
      <ScrollView style={styles.displayList}>
        <DeviceList devices={devices} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default DevicesScreen;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flex: 1,
  },
  displayList: {
    display: 'flex',
    width: '100%',
  },
  deviceCard: {
    alignSelf: 'center',
    backgroundColor: constants.secondary,
    width: '90%',
    height: 120,
    marginVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  deviceNameContainer: {
    fontSize: 18,
    color: 'black',
  },
  deviceDetails: {},
});
