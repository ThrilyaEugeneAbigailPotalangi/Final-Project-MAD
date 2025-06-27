import React from 'react';
import { TextInput } from 'react-native';

const TextInputAtom = ({ style, ...props }) => {
  return <TextInput style={style} {...props} />;
};

export default TextInputAtom;
