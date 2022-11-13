import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useState} from 'react';
import DisplayContainer from '../components/DisplayContainer';
import CustomHeader from '../components/CustomHeader';
import CustomButton from '../components/CustomButton';
import TimeUpdateContainer from '../components/TimeUpdateContainer';
import axios from 'axios';
import WifiManager from 'react-native-wifi-reborn';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import constants from '../constants';

const LoadingComponent = () => {
  return (
    <View style={styles.ErrorContainer}>
      <ActivityIndicator size="large" color="#00ff00" />
      <Text>Loading....</Text>
    </View>
  );
};

const connectToWifi = deviceType => {
  if (deviceType === 'Mushroom') {
    WifiManager.connectToProtectedSSID(
      'Mushroom Garden',
      'Bucolic@IoT',
      false,
    ).then(
      () => {
        console.log('Connected successfully!');
      },
      () => {
        console.log('Connection failed!');
      },
    );
  } else if (deviceType === 'Oxy-Lamp') {
    WifiManager.connectToProtectedSSID('Oxy Lamp', 'Bucolic@IoT', false).then(
      () => {
        console.log('Connected successfully!');
      },
      () => {
        console.log('Connection failed!');
      },
    );
  }
};

const wifiOn = setIsError => {
  WifiManager.setEnabled(true);
  WifiManager.isEnabled().then(status => {
    if (status) {
      setIsError('No IoT');
    }
  });
};

const DisplayErrors = props => {
  if (props.error === 'wifi off') {
    return (
      <View style={styles.ErrorContainer}>
        <Text>Your WiFi is OFF.</Text>
        <Text>Please turn it ON to connect to Device</Text>
        <TouchableOpacity onPress={() => wifiOn(props.setIsError)}>
          {props.error != 'wifi off' ? (
            <Icon
              name="wifi-arrow-up-down"
              color={constants.primary}
              size={100}
            />
          ) : (
            <Icon name="wifi-off" color={constants.black} size={100} />
          )}
        </TouchableOpacity>
        <Icon />
      </View>
    );
  } else if (props.error === 'No IoT') {
    return (
      <View style={styles.ErrorContainer}>
        <Text>You are not connected to IoT device.</Text>
        <Text>Please click on to Connect To IoT Device Button.</Text>
        <CustomButton
          title="Connect To IoT"
          onPress={() => connectToWifi(props.deviceType)}
        />
      </View>
    );
  } else if (props.error === 'connected') {
    return <LoadingComponent />;
  }
};

const IndividualDeviceScreen = props => {
  const [isError, setIsError] = useState('');
  const deviceIP = props.route.params.deviceIP;
  const deviceType = props.route.params.deviceType;
  const deviceName = props.route.params.deviceName;
  const [loading, setLoading] = useState(true);

  let counter = 0;

  const [data, setData] = useState({
    airQual: 0,
    device: 'OXY',
    fanOff: '00.0',
    fanOffTime: '00.0',
    fanOn: '00.0',
    fanOnTime: '00.0',
    humid: 0,
    lightOff: '00.0',
    lightOffTime: '00.0',
    lightOn: '00.0',
    lightOnTime: '00.0',
    temp: 0,
    waterL: 0.3,
    waterOff: '00.0',
    waterOffTime: '00.0',
    waterOn: '00.0',
    waterOnTime: '00.0',
  });

  let today = new Date();
  let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
  let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
  let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
  hours = hours % 12;

  let upset = hours * 60 * 60 + minutes * 60 + seconds * 1;

  const fetchData = async () => {
    try {
      const responce = await axios.get(`http://${deviceIP}/getData`);
      setLoading(false);
      counter = 0;
      setData(responce.data);
    } catch (error) {
      counter++;
      if (counter == 5) {
        console.log('Show not connected alert...');
        counter = 0;
        setIsError('Not Connected');
      }
    }
  };

  useEffect(() => {
    let handle = setInterval(fetchData, 1000);
    sendTime(upset);

    return () => {
      clearInterval(handle);
    };
  }, []);

  const sendTime = async () => {
    try {
      const responce = await axios.get(`http://${deviceIP}/time?time=${upset}`);
      setLoading(false);
      setData(responce.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    WifiManager.isEnabled().then(status => {
      if (status) {
        WifiManager.getCurrentWifiSSID().then(
          ssid => {
            if (ssid === 'Mushroom Garden' || ssid === 'Oxy Lamp') {
              setIsError('connected');
              setLoading(true);
            } else {
              setIsError('No IoT');
            }
          },
          () => {
            setIsError('No IoT');
          },
        );
      } else {
        setIsError('wifi off');
      }
    });
  });

  return (
    <View style={styles.main}>
      <CustomHeader
        isBack={true}
        title={deviceName}
        onPress={props.navigation}
      />
      {isError != 'connected' ? (
        <DisplayErrors
          error={isError}
          setIsError={setIsError}
          deviceType={deviceType}
        />
      ) : (
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
            <CustomButton title="Reset System" icon={true} nameIcon="reload" />
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
      )}
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
    // color:
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
  ErrorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
