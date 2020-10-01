import * as actions from '../actions/actionTypes';
import {addDataTransfer} from '../../services/urlApi';

export const addAmountNoteCreator = (data)=>{
  return {
    type:actions.addAmountNote,
    payload:data,
  };
};

export const transfer = (category_id,amount,sender_id,receiver_id,note)=>{
  return {
    type:actions.addTransfer,
    payload:addDataTransfer(category_id,amount,sender_id,receiver_id,note),
  };
};

