import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SelectList from 'react-native-dropdown-select-list';

const SelectBox = () => {
  const [selected, setSelected] = useState('');
  const data = [
    {key: '0', value: '0'},
    {key: '1', value: '1'},
    {key: '2', value: '2'},
    {key: '3', value: '3'},
    {key: '4', value: '4'},
    {key: '5', value: '5'},
    {key: '6', value: '6'},
    {key: '7', value: '7'},
    {key: '8', value: '8'},
    {key: '9', value: '9'},
    {key: '10', value: '10'},
    {key: '11', value: '11'},
    {key: '12', value: '12'},
  ];
  return (
    <SelectList
      search={false}
      placeholder="0"
      setSelected={setSelected}
      data={data}
      onSelect={() => alert(selected)}
      dropdownStyles={{zIndex: 100}}
    />
  );
};

export default SelectBox;

const styles = StyleSheet.create({});
