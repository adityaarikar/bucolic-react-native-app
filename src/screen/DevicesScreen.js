import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
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
      <View style={{...styles.deviceCard, height: 200}}>
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
          })
        }>
        {device.deviceType === 'Mushroom' ? (
          <Icon name="mushroom" color={constants.primary} size={200} />
        ) : (
          <Icon name="air-purifier" color={constants.primary} size={200} />
        )}
        <Text style={styles.deviceNameContainer}>
          Device Name : {device.deviceName}
        </Text>
        <Text style={styles.deviceNameContainer}>
          Device Type : {device.deviceType}
        </Text>
        <CustomButton
          title="Delete"
          style={{backgroundColor: constants.remove}}
          onPress={() => deleteDeviceHandler(device.deviceName)}
        />
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
    height: 350,
    marginVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  deviceNameContainer: {
    fontSize: 24,
    color: 'black',
  },
});
