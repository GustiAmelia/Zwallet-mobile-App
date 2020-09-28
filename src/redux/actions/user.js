import {getUser} from '../../services/urlApi';

import * as actions from './actionTypes';

export const getUserData = (email)=>{
  return {
    type : actions.fetchUser,
    payload : getUser(email),
  };
};
