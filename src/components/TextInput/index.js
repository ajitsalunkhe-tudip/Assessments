//@flow
import React from 'react';
import {TextInput as RNTextInput, View, Image} from 'react-native';
import styles from './styles';
import colors from '../../util/colors';

type Props = {
  containerStyle: any,
  image: String,
};

function TextInput(props:Props){
  const {containerStyle, image} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <Image style={styles.leftImage} source={image} />
      <RNTextInput
        style={[styles.defaultStyle]}
        testID="input_name"
        placeholderTextColor={colors.white}
      />
    </View>
  );
};

export default TextInput;
