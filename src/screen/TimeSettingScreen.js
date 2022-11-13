import {
  Modal,
  StyleSheet,
  Switch,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import constants from './../constants';
import CustomHeader from '../components/CustomHeader';
import CustomButton from '../components/CustomButton';
import InputSelect from '../components/InputSelect';
import CustomSwitch from '../components/CustomSwitch';

const TimeSettingScreen = props => {
  const [onValue, setOnValue] = useState(null);
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [offValue, setOFFValue] = useState(null);
  const [isOFFFocus, setIsOFFFocus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [properConnection, setProperConnection] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  let onTime;
  let offTime;

  if (props.route.params.setting === 'spray') {
    onTime = [
      {label: '5 Seconds', value: '5000'},
      {label: '8 Seconds', value: '8000'},
      {label: '12 Seconds', value: '12000'},
    ];

    offTime = [
      {label: '30 Minutes', value: '1800000'},
      {label: '45 Minutes', value: '2700000'},
      {label: '60 Minutes', value: '3600000'},
    ];
  } else if (props.route.params.setting === 'fan') {
    onTime = [
      {label: '5 Seconds', value: '5000'},
      {label: '8 Seconds', value: '8000'},
      {label: '12 Seconds', value: '12000'},
    ];

    offTime = [
      {label: '30 Minutes', value: '1800000'},
      {label: '45 Minutes', value: '2700000'},
      {label: '60 Minutes', value: '3600000'},
    ];
  } else if (props.route.params.setting === 'light') {
    onTime = [
      {label: '5 Seconds', value: '5000'},
      {label: '8 Seconds', value: '8000'},
      {label: '12 Seconds', value: '12000'},
    ];

    offTime = [
      {label: '30 Minutes', value: '1800000'},
      {label: '45 Minutes', value: '2700000'},
      {label: '60 Minutes', value: '3600000'},
    ];
  }

  const toggleDevice = async index => {
    console.log('Device state changed');
  };

  const sendDataHandler = () => {
    if (props.route.params.setting === 'fan') {
      fetch(
        `http://${props.route.params.deviceIP}/fanTimeSetting?fanOn=${onValue}&fanOff=${offValue}`,
      );
    } else if (props.route.params.setting === 'spray') {
      fetch(
        `http://${props.route.params.deviceIP}/sprayTimeSetting?waterOn=${onValue}&waterOff=${offValue}`,
      );
    } else if (props.route.params.setting === 'light') {
      fetch(
        `http://${props.route.params.deviceIP}/lightTimeSetting?lightOn=${onValue}&lightOff=${offValue}`,
      );
    }
    ToastAndroid.show('Time Setting Done...!', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.main}>
      <CustomHeader
        isBack={true}
        title="Time Setting"
        onPress={props.navigation}
      />
      <View style={styles.toggleContainer}>
        <Text style={styles.switchTitle}>{props.route.params.title}</Text>
        <CustomSwitch
          selectionMode={2}
          roundCorner={true}
          option1={'ON'}
          option2={'OFF'}
          onSelectSwitch={toggleDevice}
          deviceIP={props.route.params.deviceIP}
          setting={props.route.params.setting}
          selectionColor={constants.primary}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}>{props.route.params.name}</Text>
        <View style={styles.timeContainer}>
          <View style={styles.timeBox}>
            <Text style={styles.headingTime}>ON Time :</Text>
            <InputSelect
              style={{width: '70%'}}
              data={onTime}
              value={onValue}
              setValue={setOnValue}
              isFocus={isOnFocus}
              setIsFocus={setIsOnFocus}
            />
          </View>
          <View style={styles.timeBox}>
            <Text style={styles.headingTime}>OFF Time : </Text>
            <InputSelect
              style={{width: '70%'}}
              data={offTime}
              value={offValue}
              setValue={setOFFValue}
              isFocus={isOFFFocus}
              setIsFocus={setIsOFFFocus}
            />
          </View>
        </View>
        <CustomButton title="Done" onPress={sendDataHandler} />
      </View>
    </View>
  );
};

export default TimeSettingScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: constants.secondary,
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom: 20,
    borderColor: constants.primary,
  },
  heading: {
    backgroundColor: constants.primary,
    width: '100%',
    fontSize: 24,
    fontWeight: '500',
    borderRadius: 10,
    textAlign: 'center',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: constants.primary,
    color: constants.black,
  },
  timeContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    marginBottom: 20,
  },
  headingTime: {
    width: '30%',
    fontSize: 25,
    color: constants.black,
  },
  timeValue: {
    width: '70%',
    fontSize: 25,
    color: constants.black,
  },
  toggleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    height: '15%',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: constants.secondary,
    borderColor: constants.primary,
  },
  switchTitle: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: '600',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
