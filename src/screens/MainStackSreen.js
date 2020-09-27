import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Profile from './Profile';
import History from './History';
import Failed from './Failed';
import InputAmount from './InputAmount';
import PinConfirmation from './PinConfirmation';
import Search from './Search';
import Success from './Success';

const MainStack = createStackNavigator();

const MainStackScreen = ()=>(
  <MainStack.Navigator headerMode="none">
    <MainStack.Screen name="Home" component={Home}/>
    <MainStack.Screen name="Profile" component={Profile}/>
    <MainStack.Screen name="History" component={History}/>
    <MainStack.Screen name="Failed" component={Failed}/>
    <MainStack.Screen name="InputAmount" component={InputAmount}/>
    <MainStack.Screen name="PinConfirmation" component={PinConfirmation}/>
    <MainStack.Screen name="Search" component={Search}/>
    <MainStack.Screen name="Success" component={Success}/>
  </MainStack.Navigator>
);

export default MainStackScreen;

