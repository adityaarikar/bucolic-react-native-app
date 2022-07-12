import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CustomPicker} from 'react-native-custom-picker';

const TimeSettingScreen = props => {
  const options = ['One', 'Two', 'Three', 'Four', 'Five'];
  return (
    <View>
      <Text>TimeSettingScreen</Text>
      <Text>{props.route.params.name}</Text>
      <CustomPicker
        options={options}
        onValueChange={value => {
          Alert.alert('Selected Item', value || 'No item were selected!');
        }}
      />
    </View>
  );
};

export default TimeSettingScreen;

const styles = StyleSheet.create({});
