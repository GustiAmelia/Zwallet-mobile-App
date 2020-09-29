import {login,register,updatePin} from '../../services/urlApi';

import * as actions from './actionTypes';

export const getLogin = (email,password)=>{
  return {
    type:actions.fetchLogin,
    payload:login(email,password),
  };
};

export const signup = (username,email,password)=>{
  return {
    type:actions.isRegistered,
    payload:register(username,email,password),
  };
};

export const logOut = ()=>{
  return {
    type:actions.isLoggedOut,
  };
};

export const pinInput = (pin,username)=>{
  return {
    type:actions.createPin,
    payload:updatePin(pin,username),
  };
};

