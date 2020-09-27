import React from 'react';
import {useSelector} from 'react-redux';

import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import SignUp from './SingUp';
import CreatePin from './CreatePin';
import PinSuccess from './PinSuccess';

const AuthStack = createStackNavigator();

const AuthStackScreen = ({navigation})=> {

  const register = useSelector((state)=>state.auth.register);

  return (
    <AuthStack.Navigator headerMode="none">
      {register ?
      <>
        <AuthStack.Screen name="CreatePin" component={CreatePin}/>
        <AuthStack.Screen name="PinSuccess" component={PinSuccess}/>
      </>
      :
      <>
        <AuthStack.Screen name="Login" component={Login}/>
        <AuthStack.Screen name="SignUp" component={SignUp}/>
      </>
      }
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
