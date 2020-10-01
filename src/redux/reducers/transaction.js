import * as actions from '../actions/actionTypes';

const initialState = {
  amount:null,
  note:null,
  transferSuccess:false,
};

const transaction = (state = initialState, action)=>{
  switch (action.type){
    case actions.addAmountNote:
      return {
        ...state,
        amount:action.payload.amount,
        note:action.payload.note,
      };
    case actions.addTransfer + actions.pending:
      return {
        ...state,
        isPending:true,
      };
    case actions.addTransfer + actions.rejected:
      return {
        ...state,
        isRejected:true,
        isPending:false,
        data: action.payload,
      };
    case actions.addTransfer + actions.fulfilled:
      let transfer = null;
      if (action.payload.data.isSuccess){
        transfer = true;
      } else {
        transfer = false;
      }
      return {
        ...state,
        transferSuccess:transfer,
      };
    default:
      return state;
  }
};

export default transaction;

