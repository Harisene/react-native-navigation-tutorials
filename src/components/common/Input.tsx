import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

interface InputProps {
  placeholder: string;
  value: string;
  onChange(value: string): void;
}

const Input = (props: InputProps) => {
  return (
    <View style={styles.container}>
      <Text>{props.placeholder}</Text>
      <TextInput
        style={styles.input}
        value={props.value}
        placeholder={props.placeholder} 
        onChangeText={props.onChange}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    marginVertical: 10
  },
  input: {
    marginTop: 5,
    padding: 16,
    borderRadius: 20,
    borderColor: '#000',
    borderWidth: 1
  }
})

export default Input;