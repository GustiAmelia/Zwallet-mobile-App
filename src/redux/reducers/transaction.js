import * as actions from '../actions/actionTypes';

const initialState = {
  amount:null,
  note:null,
  transferSuccess:false,
  allHistory:null,
  homeHistory:null,
  income :null,
  out:null,
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
    case actions.allTransaction + actions.pending:
      return {
        ...state,
        isPending:true,
      };
    case actions.allTransaction + actions.rejected:
      return {
        ...state,
        isRejected:true,
        isPending:false,
        allHistory: action.payload,
        homeHistory:action.payload,
      };
    case actions.allTransaction + actions.fulfilled:
      return {
        ...state,
        allHistory:action.payload.data.results,
        homeHistory:action.payload.data.results.slice(0,3),
      };
    case actions.income:
      return {
        ...state,
        income:action.payload,
      };
    case actions.out:
      return {
        ...state,
        out:action.payload,
      };
    default:
      return state;
  }
};

export default transaction;

