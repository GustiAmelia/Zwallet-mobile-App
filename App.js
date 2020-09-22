/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/screens/Login';


const App = () => {
  return (
    <NavigationContainer>
      <Login/>
    </NavigationContainer>
  );
};


export default App;
