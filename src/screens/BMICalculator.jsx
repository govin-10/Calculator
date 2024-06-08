import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {ButtonComponent, TextInput} from '../components';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [BMIIndex, setBMIIndex] = useState(0);

  const {
    container,
    titleText,
    inputSection,
    instructionText,
    messageBox,
    messageTitle,
    index,
  } = styles;

  const calculateBMI = () => {
    if (weight && height) {
      const myWeight = parseFloat(weight);
      const myHeight = parseFloat(height);
      const calculatedBMI = myWeight / (myHeight * myHeight);
      setBMIIndex(calculatedBMI.toFixed(2));
    } else {
      setBMIIndex(null);
    }
  };

  return (
    <View style={container}>
      <Text style={titleText}>BMICalculator</Text>
      <View style={inputSection}>
        <Text style={instructionText}>Enter your weight:</Text>
        <TextInput inputValue={weight} changedInput={setWeight} />
        <Text style={instructionText}>Enter your height: </Text>
        <TextInput inputValue={height} changedInput={setHeight} />
      </View>
      <ButtonComponent title={'Calculate'} onPress={calculateBMI} />
      <View style={messageBox}>
        <Text style={messageTitle}>Your BMI Index</Text>
        <Text style={index}>{BMIIndex}</Text>
      </View>
    </View>
  );
};

export default BMICalculator;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    height: Dimensions.get('window').height - 100,
  },
  titleText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  instructionText: {
    fontSize: 18,
    color: 'black',
  },
  inputSection: {
    marginTop: 10,
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageTitle: {
    fontSize: 22,
    color: 'black',
  },
  index: {
    fontSize: 100,
    color: 'black',
    fontWeight: 'bold',
  },
});
