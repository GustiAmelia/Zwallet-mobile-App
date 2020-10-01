import * as actions from '../actions/actionTypes';

const initialState = {
  amount:null,
  note:null,
};

const transaction = (state = initialState, action)=>{
  switch (action.type){
    case actions.addAmountNote:
      return {
        ...state,
        amount:action.payload.amount,
        note:action.payload.note,
      };
    default:
      return state;
  }
};

export default transaction;

