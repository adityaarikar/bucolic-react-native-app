import {StyleSheet, Text, View} from 'react-native';
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

  let onTime;
  let offTime;

  if (props.route.params.setting === 'spray') {
    onTime = [
      {label: '5000', value: '5000'},
      {label: '8000', value: '8000'},
      {label: '12000', value: '12000'},
    ];

    offTime = [
      {label: '30000', value: '30000'},
      {label: '45000', value: '45000'},
      {label: '60000', value: '60000'},
    ];
  } else if (props.route.params.setting === 'fan') {
    onTime = [
      {label: '5000', value: '5000'},
      {label: '8000', value: '8000'},
      {label: '12000', value: '12000'},
    ];

    offTime = [
      {label: '30000', value: '30000'},
      {label: '45000', value: '45000'},
      {label: '60000', value: '60000'},
    ];
  } else if (props.route.params.setting === 'light') {
    onTime = [
      {label: '5000', value: '5000'},
      {label: '8000', value: '8000'},
      {label: '12000', value: '12000'},
    ];

    offTime = [
      {label: '30000', value: '30000'},
      {label: '45000', value: '45000'},
      {label: '60000', value: '60000'},
    ];
  }

  const toggleDevice = index => {
    if (index == 2) {
      fetch(
        `http://${props.route.params.deviceIP}/${props.route.params.setting}` +
          `off`,
      );
    } else {
      fetch(
        `http://${props.route.params.deviceIP}/${props.route.params.setting}` +
          `on`,
      );
    }
    props.route.params.setUpdate(!props.route.params.update);
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
});
