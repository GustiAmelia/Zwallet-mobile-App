import {getUser} from '../../services/urlApi';

import * as actions from './actionTypes';

export const getReceiver = (id)=>{
  return {
    type:actions.fetchReceiver,
    payload:getUser(id),
  };
};
