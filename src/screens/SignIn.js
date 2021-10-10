import React, { useContext, useEffect } from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';
const SignIn = ({navigation}) => {
  const {state, signIn, clearErrorMessage} = useContext(AuthContext);
  const {viewStyle} = styles;
  useEffect(()=>{
    const clearErrMsg = navigation.addListener('blur', ()=>clearErrorMessage())
    return clearErrMsg;
  },
  [navigation]);

  return (
    <SafeAreaView>
      {/* <View style={viewStyle}>
        <Text>Auth App</Text>
      </View> */}
      <AuthForm
        headerText="Sign In"
        errorMessage={state.errorMessage}
        onSubmit={signIn}
        submitButtonText="Sign In"
      />
    <NavLink routename='SignUp'>
      Don't have an account? Sign Up Instead!!
    </NavLink>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    textAlign: 'center',
  },
});

export default SignIn;
