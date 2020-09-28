import * as actions from '../actions/actionTypes';

const initialState = {
	receiver:[],
	isPending:false,
	isFulfilled: false,
  isRejected: false,
};

const receiverReducers = (state = initialState,action)=>{
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
      receiver: action.payload,
      };
		case actions.fetchReceiver + actions.fulfilled:
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        receiver: action.payload.data.results,
        isRejected: false,
      };
    default:
      return state;
   }
};

export default receiverReducers;

