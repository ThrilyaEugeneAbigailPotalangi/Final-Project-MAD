import React from 'react';
import { TouchableOpacity } from 'react-native';

const Touchable = ({ children, style, onPress }) => {
  return <TouchableOpacity style={style} onPress={onPress}>{children}</TouchableOpacity>;
};

export default Touchable;
