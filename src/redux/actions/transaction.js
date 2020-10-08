import * as actions from '../actions/actionTypes';
import {addDataTransfer,allTransaction} from '../../services/urlApi';

export const addAmountNoteCreator = (data)=>{
  return {
    type:actions.addAmountNote,
    payload:data,
  };
};

export const transfer = (category,amount,sender_id,receiver_id,note)=>{
  return {
    type:actions.addTransfer,
    payload:addDataTransfer(category,amount,sender_id,receiver_id,note),
  };
};

export const history = (id)=>{
  return {
    type :actions.allTransaction,
    payload:allTransaction(id),
  };
};

export const incomeCreator = (dataIncome)=>{
  return {
    type :actions.income,
    payload:dataIncome,
  };
};

export const outCreator = (dataOut)=>{
  return {
    type :actions.out,
    payload:dataOut,
  };
};

