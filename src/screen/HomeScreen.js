import {View, Text, StyleSheet, Button, Image} from 'react-native';
import React from 'react';
import constants from '../constants';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Image
          style={styles.logoImage}
          source={require('../assets/images/companyLogo.png')}
          width={150}
          height={150}
        />
        <Text style={styles.title}>Kalpvariksh</Text>
      </View>
      <View style={styles.bottom}>
        <Image
          style={styles.bottomImage}
          source={require('../assets/images/plant1.png')}
          width={200}
          height={250}
        />
        <Button
          style={styles.bottomButton}
          title="Add Device"
          color={constants.primary}
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
    width: '100%',
    height: '100%',
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
