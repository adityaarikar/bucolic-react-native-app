import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import constants from '../constants';
import WifiManager from 'react-native-wifi-reborn';
import {useState} from 'react';
import CustomButton from '../components/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';

const ConfigureDeviceScreen = props => {
  const [connected, setConnected] = useState(false);
  const [wifiList, setWifiList] = useState([]);
  const [isSystemPresent, setIsSystemPresent] = useState(false);
  const [ssidName, setSsidName] = useState('');
  const password = 'Bucolic@IoT';
  const [ip, setIp] = useState('');
  const buttonTextStyle = {
    color: '#393939',
  };
  const DisplayWifiList = props => {
    if (
      props.item.SSID === 'Mushroom Garden' ||
      props.item.SSID === 'Oxy Lamp'
    ) {
      if (props.item.SSID === 'Mushroom Garden') {
        setSsidName('Mushroom Garden');
      } else if (props.item.SSID === 'Oxy Lamp') {
        setSsidName('Oxy Lamp');
      }

      setIsSystemPresent(true);
    }
    return (
      <View>
        <Text>{props.item.SSID}</Text>
      </View>
    );
  };

  const wifiOn = () => {
    console.log('wifi on');
    WifiManager.setEnabled(true);
    WifiManager.isEnabled().then(status => {
      setConnected(status);
    });
  };

  const getWifiList = () => {
    WifiManager.loadWifiList().then(list => {
      setWifiList(list);
    });
  };

  const ConnectToIoTDevice = () => {
    WifiManager.connectToProtectedSSID(ssidName, password, false).then(
      () => {
        console.log('Connected successfully!');
      },
      () => {
        console.log('Connection failed!');
      },
    );
  };

  const getIP = () => {
    WifiManager.getIP().then(ip => {
      setIp(ip);
    });
  };

  const DoneConfigureDevice = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.main}>
      <CustomHeader isBack={false} title="Configure Device" />
      <View style={{flex: 1}}>
        <ProgressSteps>
          <ProgressStep
            label="First Step"
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}>
            <View style={{alignItems: 'center'}}>
              <Text>
                Please cleck on to the wifi sign and turn on the wifi.
              </Text>
              <TouchableOpacity onPress={() => wifiOn()}>
                {connected ? (
                  <Icon
                    name="wifi-arrow-up-down"
                    color={constants.primary}
                    size={100}
                  />
                ) : (
                  <Icon name="wifi-off" color={constants.black} size={100} />
                )}
              </TouchableOpacity>
              {connected ? <Text>Wifi On</Text> : <Text>Wifi Off</Text>}
            </View>
          </ProgressStep>
          <ProgressStep
            label="Second Step"
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}>
            <View style={{alignItems: 'center'}}>
              <Text>Click on refresh button to load the wifi available...</Text>
              <View style={styles.wifiContainer}>
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 30,
                    backgroundColor: constants.primary,
                    borderRadius: 10,
                  }}>
                  <Text>Available Networks</Text>
                  <TouchableOpacity onPress={() => getWifiList()}>
                    <Icon name="refresh" color={constants.black} size={25} />
                  </TouchableOpacity>
                </View>
                <ScrollView style={styles.listView}>
                  {Object.keys(wifiList).length == 0 ? (
                    <Text>No wifi Network Found</Text>
                  ) : (
                    <FlatList
                      data={wifiList}
                      keyExtractor={wifi => wifi.BSSID}
                      renderItem={DisplayWifiList}
                    />
                  )}
                </ScrollView>
              </View>

              <View>
                {isSystemPresent ? (
                  <CustomButton
                    title="Connect to IoT Device"
                    onPress={() => ConnectToIoTDevice()}
                  />
                ) : null}
              </View>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Third Step"
            onSubmit={() => DoneConfigureDevice()}>
            <View
              style={{alignItems: 'center'}}
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}>
              <Text>Click on the button to get the IP Address...</Text>
              <CustomButton title="Get The IP" onPress={() => getIP()} />
              {ip !== '' ? <Text>{ip}</Text> : null}
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </View>
  );
};

export default ConfigureDeviceScreen;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flex: 1,
  },
  wifiContainer: {
    height: 200,
    width: '80%',
    flex: 1,
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
});
