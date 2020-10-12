import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = ({ containerStyle, style, text, ...otherProps }) => (
    <TouchableOpacity
        style={[styles.container, containerStyle]}
        {...otherProps}
    >
        <Text style={[styles.text, style]}>
            {text}
        </Text>
    </TouchableOpacity>
);

export default Button;

