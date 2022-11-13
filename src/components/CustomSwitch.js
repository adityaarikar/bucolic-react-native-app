import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ToastAndroid,
} from 'react-native';
import CustomButton from './CustomButton';

const CustomSwitch = ({
  navigation,
  selectionMode,
  roundCorner,
  option1,
  option2,
  onSelectSwitch,
  selectionColor,
  deviceIP,
  setting,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState(2);

  const updatedSwitchData = async () => {
    if (value === 2) {
      console.log('Off time');
      setSelectionMode(2);
      onSelectSwitch(2);
      let res = await fetch(`http://${deviceIP}/${setting}` + `off`);
      setModalVisible(!modalVisible);
    } else if (value === 1) {
      console.log('On time');
      setSelectionMode(1);
      onSelectSwitch(1);
      let res = await fetch(`http://${deviceIP}/${setting}` + `on`);
      setModalVisible(!modalVisible);
    }
    ToastAndroid.show('Device state is Updated.', ToastAndroid.SHORT);
  };

  const setModelAndRequest = num => {
    setModalVisible(true);
    if (num === 1) {
      setValue(1);
    } else if (num === 2) {
      setValue(2);
    }
  };

  console.log(value);

  return (
    <View>
      <View
        style={{
          height: 44,
          width: 215,
          backgroundColor: 'white',
          borderRadius: getRoundCorner ? 25 : 0,
          borderWidth: 1,
          borderColor: selectionColor,
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 2,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setModelAndRequest(1)}
          style={{
            flex: 1,

            backgroundColor: getSelectionMode == 1 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: getSelectionMode == 1 ? 'white' : selectionColor,
            }}>
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          TouchableOpacity
          activeOpacity={1}
          onPress={() => setModelAndRequest(2)}
          style={{
            flex: 1,

            backgroundColor: getSelectionMode == 2 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: getSelectionMode == 2 ? 'white' : selectionColor,
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure.</Text>
            <Text style={styles.modalText}>
              You want to change the state of Device?
            </Text>
            <CustomButton title="Yes" onPress={() => updatedSwitchData()} />
            <CustomButton
              title="Cancel"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default CustomSwitch;

const styles = StyleSheet.create({
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
