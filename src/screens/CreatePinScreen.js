import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import CreatePin from './CreatePin';

const PinStack = createStackNavigator();

const CreatePinStackScreen = ()=>{
  return (
    <PinStack.Navigator>
      <PinStack.Screen name="CreatePin" component={CreatePin}/>
    </PinStack.Navigator>
  );
};

module.exports = CreatePinStackScreen;
