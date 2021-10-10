import React, {useContext, useEffect} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import AuthForm from '../components/AuthForm';
import firebase from 'firebase';
import {Context as AuthContext} from '../context/AuthContext';
import { Button } from 'react-native';
import NavLink from '../components/NavLink';
import { SafeAreaView } from 'react-native-safe-area-context';
const SignUp = ({navigation}) => {
  // const {viewStyle} = styles;
  const {state, signIn, signOut, signUp, clearErrorMessage, } = useContext(AuthContext);
  // console.log(state);
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
        headerText="Sign Up"
        errorMessage={state.errorMessage}
        onSubmit={signUp}
        submitButtonText="Sign Up"
      />
    <NavLink routename='SignIn'>
      Already have an account? Sign In Instead!!
    </NavLink>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    textAlign: 'center',
  },
});

export default SignUp;
