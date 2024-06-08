import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const InputComp = ({inputValue, changedInput}) => {
  const {inputBox} = styles;
  //   console.log(inputValue);
  return (
    <View>
      <TextInput
        style={inputBox}
        value={inputValue}
        onChangeText={changedInput}
      />
    </View>
  );
};

export default InputComp;

const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 2,
    padding: 10,
    fontSize: 18,
    marginBottom: 15,
  },
});
