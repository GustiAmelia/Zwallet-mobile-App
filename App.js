/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './src/screens/SplashScreen';
import AuthStackScreen from './src/screens/AuthStackScreen';
import MainStackScreen from './src/screens/MainStackSreen';

import {getUserCreator} from './src/redux/actions/user';
// import {history} from './src/redux/actions/transaction';

const App = () => {

  const dispatch = useDispatch();

  const login = useSelector((state)=>state.auth.isLoggedIn);

  const [isLoading, setIsLoading ] = React.useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false);
    },1000);
    dispatch(getUserCreator());
    // dispatch(history());
  },);

  if (isLoading){
    return (
      <SplashScreen/>
    );
  }


  return (
      <NavigationContainer>
        {login ?
        <MainStackScreen/>
        :
        <AuthStackScreen/>}
      </NavigationContainer>
  );
};


export default App;
