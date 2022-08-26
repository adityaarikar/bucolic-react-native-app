import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useState} from 'react';
import DisplayContainer from '../components/DisplayContainer';
import CustomHeader from '../components/CustomHeader';
import CustomButton from '../components/CustomButton';
import TimeUpdateContainer from '../components/TimeUpdateContainer';
import axios from 'axios';

const IndividualDeviceScreen = props => {
  const deviceIP = props.route.params.deviceIP;
  const deviceName = props.route.params.deviceName;
  const [data, setData] = useState({
    airQual: 0,
    device: 'OXY',
    fanOff: '00.0',
    fanOffTime: '00.0',
    fanOn: '00.0',
    fanOnTime: '00.0',
    humid: 0,
    ip: '192.168.43.29',
    lightOff: '00.0',
    lightOffTime: '00.0',
    lightOn: '00.0',
    lightOnTime: '00.0',
    temp: 0,
    waterL: '00.0',
    waterOff: '00.0',
    waterOffTime: '00.0',
    waterOn: '00.0',
    waterOnTime: '00.0',
  });

  const fetchData = async () => {
    //http://192.168.43.29/getData
    const responce = await axios.get(`http://${deviceIP}/getData`);
    setData(responce.data);
  };

  useEffect(() => {
    let handle = setInterval(fetchData, 500);

    return () => {
      clearInterval(handle);
    };
  }, []);

  return (
    <View style={styles.main}>
      <CustomHeader
        isBack={true}
        title={deviceName}
        onPress={props.navigation}
      />
      <ScrollView>
        <DisplayContainer responce={data} />
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Water Control"
            onPress={() => {
              props.navigation.navigate('TimeSettingScreen', {
                deviceIP: deviceIP,
                title: 'Spray',
                name: 'Water Time Settings',
                setting: 'spray',
              });
            }}
            icon={true}
            nameIcon="water"
          />
          <CustomButton
            title="Fan Control"
            onPress={() => {
              props.navigation.navigate('TimeSettingScreen', {
                deviceIP: deviceIP,
                title: 'Fan',
                name: 'Fan Time Settings',
                setting: 'fan',
              });
            }}
            icon={true}
            nameIcon="fan"
          />
          <CustomButton
            title="Light Control"
            onPress={() => {
              props.navigation.navigate('TimeSettingScreen', {
                deviceIP: deviceIP,
                title: 'Light',
                name: 'Light Time Settings',
                setting: 'light',
              });
            }}
            icon={true}
            nameIcon="lightbulb-on"
          />
          <CustomButton
            title="Reset System"
            // onPress={() => {
            //   props.navigation.navigate('TimeSettingScreen', {
            //     name: 'Fan Time Settings',
            //   });
            // }}
            icon={true}
            nameIcon="reload"
          />
        </View>
        <TimeUpdateContainer
          title="Light Time Update"
          onTitle="Last Light ON"
          onValue={data.lightOnTime}
          offTitle="Last Light OFF"
          offValue={data.lightOffTime}
        />
        <TimeUpdateContainer
          title="Fan Time Update"
          onTitle="Last Fan ON"
          onValue={data.fanOnTime}
          offTitle="Last Fan OFF"
          offValue={data.fanOffTime}
        />
        <TimeUpdateContainer
          title="Water Time Update"
          onTitle="Last Water ON"
          onValue={data.waterOnTime}
          offTitle="Last Water OFF"
          offValue={data.waterOffTime}
        />
      </ScrollView>
    </View>
  );
};

export default IndividualDeviceScreen;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
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
