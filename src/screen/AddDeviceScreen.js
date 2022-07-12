import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addDevice} from '../redux/slice/deviceSlice';

const AddDeviceScreen = () => {
  const [deviceName, setDeviceName] = useState('');
  const [deviceIP, setDeviceIP] = useState('');
  const dispatch = useDispatch();

  const showAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);

  const addDeviceHandler = () => {
    dispatch(addDevice({deviceName: deviceName, deviceIP: deviceIP}));
    setDeviceName('');
    setDeviceIP('');
    showAlert();
  };

  return (
    <View style={StyleSheet.main}>
      <View style={styles.deviceContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitles}>Device Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setDeviceName}
            value={deviceName}
            placeholder="Device Name"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitles}>Device IP</Text>
          <TextInput
            style={styles.input}
            onChangeText={setDeviceIP}
            value={deviceIP}
            placeholder="0.0.0.0"
            keyboardType="numeric"
          />
        </View>
      </View>
      <Button title="Add Device" onPress={addDeviceHandler} />
    </View>
  );
};

export default AddDeviceScreen;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    paddingHorizontal: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputTitles: {
    width: '30%',
  },
  input: {
    height: 40,
    width: '50%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
