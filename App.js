/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './src/screens/SplashScreen';
import AuthStackScreen from './src/screens/AuthStackScreen';
import MainStackScreen from './src/screens/MainStackSreen';


const App = () => {

  const login = useSelector((state)=>state.auth.isLoggedIn);

  const [isLoading, setIsLoading ] = React.useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false);
    },1000);
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
