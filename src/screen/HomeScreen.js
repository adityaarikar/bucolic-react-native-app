import {View, Text, StyleSheet, Button, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import constants from '../constants';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({navigation}) => {
  const [time, setTime] = useState(null);
  useEffect(() => {
    let time = getCurrentTime();
    setTime(time);
  }, []);
  const getCurrentTime = () => {
    let today = new Date();
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();

    let upset = (12 - hours) * 1000 * 60 * 60 + (60 - minutes) * 1000 * 60;
    console.log(upset);

    return hours + ':' + minutes + ':' + seconds;
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Image
          style={styles.logoImage}
          source={require('../assets/images/companyLogo.png')}
          width={150}
          height={150}
        />
        <Text style={styles.title}>Bucolic Kailash</Text>
      </View>
      <View style={styles.bottom}>
        <Image
          style={styles.bottomImage}
          source={require('../assets/images/plant1.png')}
          width={200}
          height={250}
        />

        <CustomButton
          title="Add Device"
          onPress={() => {
            navigation.navigate('AddDeviceScreen');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // color: constants.black,
    display: 'flex',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: '35%',
    width: '100%',
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    backgroundColor: constants.primary,
  },
  logoImage: {
    marginVertical: 10,
  },
  title: {
    fontSize: 25,
  },
  bottom: {
    height: '65%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomImage: {
    resizeMode: 'contain',
  },
  bottomButton: {
    marginTop: 20,
  },
});

export default HomeScreen;
