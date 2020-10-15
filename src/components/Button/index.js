//@flow
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

type Props = {
  containerStyle: any,
  text: String,
};
  
function Button(props:Props){
  const {containerStyle, text} = props;
  return (
	<TouchableOpacity style={[styles.container, containerStyle]}>
	<Text style={[styles.text]} testID="save">{text}</Text>
	</TouchableOpacity>
  );
};
  
export default Button;