import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Spacer />
      <Spacer />
      <Spacer>
        <Text h3>
          {headerText}
          {/* SignUp for Tracker */}
        </Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Text style={styles.errMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit(email, password)}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errMessage: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    // marginBottom : 20
  },
});

export default AuthForm;
