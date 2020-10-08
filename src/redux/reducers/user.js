import * as actions from '../actions/actionTypes';

const initialState = {
  user:null,
  contact:null,
	isPending:false,
	isFulfilled: false,
  isRejected: false,
};

const userReducers = (state = initialState,action)=>{
  switch (action.type){
		case actions.fetchReceiver + actions.pending:
      return {
      ...state,
      isPending:true,
      };
		case actions.fetchReceiver + actions.rejected:
      return {
      ...state,
      isRejected:true,
      isPending:false,
      user: action.payload,
      };
		case actions.fetchReceiver + actions.fulfilled:
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        user: action.payload.data.results,
        isRejected: false,
      };
    case actions.updateImage + actions.pending:
      return {
        ...state,
        isPending: true,
      };
    case actions.updateImage + actions.rejected:
      return {
        ...state,
        isRejected: true,
        isPending: false,
      };
    case actions.updateImage + actions.fulfilled:
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        isRejected: false,
      };
    case actions.searchContact + actions.pending:
      return {
        ...state,
        isPending: true,
      };
    case actions.searchContact + actions.rejected:
      return {
        ...state,
        isRejected: true,
        isPEnding: false,
      };
    case actions.searchContact + actions.fulfilled:
      return {
        ...state,
        isPending: false,
        contact: action.payload.data.results,
        isFulfilled: true,
      };
    default:
      return state;
   }
};

export default userReducers;

