import React, { useContext, useEffect } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AuthForm from './src/components/AuthForm';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import firebase from 'firebase';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/Home';
import {Context as AuthContext} from './src/context/AuthContext'
import Splash from './src/screens/Splash';
import { navigationRef } from './src/RootNavigation';

// const App = () => {

//   return <SignUp />
// }

const stack = createStackNavigator();
const App = ({navigation}) => {
  const {state, tryLocalSignIn}=useContext(AuthContext);
  // useEffect(() => {
  //     tryLocalSignIn();
      

  // }, 
  // [])


  console.log(state.isSignedIn);
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        {!state.isSignedIn?(
        <stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={SignUp}>
            <stack.Screen name='Splash' component={Splash} />
          <stack.Screen name="SignUp" component={SignUp} />
          <stack.Screen name='SignIn' component={SignIn} />
        </stack.Navigator>):(
          <stack.Navigator>
            {/* <stack.Screen name='Splash' component={Splash}/> */}
            <stack.Screen name="Home" component={Home}/>
          </stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
