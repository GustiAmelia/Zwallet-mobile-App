/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import Login from './src/screens/Login';
// import SignUp from './src/screens/SingUp';
import SplashScreen from './src/screens/SplashScreen';


const App = () => {
  return (
    <NavigationContainer>
      <SplashScreen/>
      {/* <Login/> */}
      {/* <SignUp/> */}
    </NavigationContainer>
  );
};


export default App;
