import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface Props {
  title: string;
  onPress: () => void;
}

const LanguageButton = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LanguageButton;

const styles = StyleSheet.create({
  button: {
    width: '50%',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
  },
});
