import {getAllReceiver} from '../../services/urlApi';

import * as actions from './actionTypes';

export const getReceiver = ()=>{
  return {
    type:actions.fetchReceiver,
    payload:getAllReceiver(),
  };
};
