import React, {createContext} from 'react';
import contextCreator from './contextCreator';
import fire from '../firebase/fire';
import { navigate } from '../RootNavigation';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'try_local_signin' :
      return {...state, isSignedIn:action.payload}
    case 'clear_error_message':
      return {...state, errorMessage:""}
    case 'signUp': 
      return {...state, isSignedIn:action.payload};
    case 'signIn':  
      return {...state, isSignedIn:action.payload};
    case 'signOut':
      return {...state, isSignedIn:action.payload};
    case 'add_error':
      return {...state, errorMessage: action.payload}
    default:
      return state;
  }
};

const signUp = dispatch => {
  return async(email, password) => {
    try{
      const response=await fire.auth().createUserWithEmailAndPassword(email, password);
      dispatch({type: 'signUp', payload: true});
      console.log(response);
      // console.log(response.user.stsTokenManager)

    }catch(err){
      dispatch({type:'add_error', payload:'something went wrong with sign Up'})
      console.log(err.message)}
  }
}
const signIn = dispatch => {
  return async(email, password) => {
    try{
      const response=await fire.auth().signInWithEmailAndPassword(email, password);
      dispatch({type: 'signIn', payload: true});
      console.log(response);
      console.log(response.user.stsTokenManager)

    }catch(err){
      dispatch({type:'add_error', payload:'something went wrong with sign in'})
      console.log(err.message)}

};
};
const signOut =(dispatch) => {
  return async() => {
    try{
      fire.auth().signOut();
    dispatch({type:'signOut', payload:false})
    }
    catch(err){
      console.log(err.message);
      dispatch({type:'add_error', payload:'signout error'})
    }
  }
}

const clearErrorMessage = dispatch=>{
  return() => {
    dispatch({type:"clear_error_message"})
  }

}

const tryLocalSignIn = (dispatch) =>{
  return async( ) => {
    try{
      const response= await fire.auth().onAuthStateChanged((user)=>{
        if(user){
          dispatch({type:'try_local_signin', payload: true});
          navigate('Home');

        }
        else{
          dispatch({type:'try_local_signin', payload: false});
          navigate('SignIn');
        }
      })
  }
  catch(err){
    console.log(err.message);
  }
}}
export const {Context, Provider} = contextCreator(authReducer, {tryLocalSignIn,signIn, signOut, signUp, tryLocalSignIn, clearErrorMessage},
  {user: '', 
  errorMessage:'',
  isSignedIn: false
});
