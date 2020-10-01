import * as actions from '../actions/actionTypes';

export const addAmountNoteCreator = (data)=>{
  return {
    type:actions.addAmountNote,
    payload:data,
  };
};
