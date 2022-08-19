import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import Input from '../components/common/Input';

const SignUp = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleUserNameChange = (value: string): void => {
    setUsername(value);
  }

  const handlePasswordChange = (value: string): void => {
    setPassword(value);
  }

  const handleConfirmPasswordChange = (value: string): void => {
    setConfirmPassword(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Input placeholder='Enter Username' onChange={handleUserNameChange} value={username} />
        <Input placeholder='Enter Password' onChange={handlePasswordChange} value={password} />
        <Input placeholder='Confirm Password' onChange={handleConfirmPasswordChange} value={confirmPassword} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="SignUp"/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    width: '80%',
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'lightgrey'
  },
  buttonContainer: {
    marginTop: 30
  }
})

export default SignUp;