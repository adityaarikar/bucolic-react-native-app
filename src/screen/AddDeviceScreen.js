import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Image,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addDevice} from '../redux/slice/deviceSlice';
import CustomHeader from '../components/CustomHeader';
import CustomButton from '../components/CustomButton';
import constants from '../constants';
import InputSelect from '../components/InputSelect';

const data = [
  {label: 'Mushroom Garden', value: 'Mushroom'},
  {label: 'Oxy Lamp', value: 'Oxy-Lamp'},
];

const AddDeviceScreen = props => {
  const [deviceName, setDeviceName] = useState('');
  const [deviceIP, setDeviceIP] = useState('');
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();

  const showAlert = () =>
    Alert.alert(
      'Successful',
      'Your device is successfully added to your dashboard.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
    );

  const addDeviceHandler = () => {
    dispatch(
      addDevice({
        deviceName: deviceName,
        deviceIP: deviceIP,
        deviceType: value,
      }),
    );
    setDeviceName('');
    setDeviceIP('');
    setValue(null);
    showAlert();
  };

  return (
    <View style={StyleSheet.main}>
      <CustomHeader
        isBack={true}
        title="Add Device"
        onPress={props.navigation}
      />
      <View style={styles.inputComponent}>
        <Image
          source={require('../assets/images/Untitled.png')}
          style={{width: '80%', resizeMode: 'contain', height: '45%'}}
        />
        <TextInput
          style={styles.input}
          onChangeText={setDeviceName}
          value={deviceName}
          placeholder="Device Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={setDeviceIP}
          value={deviceIP}
          placeholder="0.0.0.0"
          keyboardType="numeric"
        />
        <InputSelect
          data={data}
          value={value}
          setValue={setValue}
          isFocus={isFocus}
          setIsFocus={setIsFocus}
        />
        <CustomButton title="Add" onPress={addDeviceHandler} />
      </View>
    </View>
  );
};

export default AddDeviceScreen;

const styles = StyleSheet.create({
  inputComponent: {
    alignSelf: 'center',
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: constants.secondary,
    borderColor: constants.primary,
    borderWidth: 1,
  },
  input: {
    height: 40,
    width: '50%',
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
});
