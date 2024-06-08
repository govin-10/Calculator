import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonComp = ({title, onPress}) => {
  const {calculateButton, calculateText} = styles;
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={calculateButton}>
        <Text style={calculateText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  calculateButton: {
    backgroundColor: 'blue',
    padding: 15,
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  calculateText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
