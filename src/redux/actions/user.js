import {getUser,updateImg,searchContact} from '../../services/urlApi';

import * as actions from './actionTypes';

export const getUserCreator = ()=>{
  return {
    type:actions.fetchReceiver,
    payload:getUser(),
  };
};

export const updateImgCreator = (id, avatar) => {
  return {
    type: actions.updateImage,
    payload: updateImg(id, avatar),
  };
};

export const searchContactCreator = (username)=>{
  return {
    type: actions.searchContact,
    payload:searchContact(username),
  };
};
