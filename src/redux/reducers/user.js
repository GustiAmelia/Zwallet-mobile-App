import * as actions from '../actions/actionTypes';

const initialState = {
	user:[],
	isPending:false,
	isFulfilled: false,
  isRejected: false,
};

const userReducer = (state = initialState,action)=>{
  switch (action.type){
		case actions.fetchUser + actions.pending:
      return {
      ...state,
      isPending:true,
      };
		case actions.fetchUser + actions.rejected:
      return {
      ...state,
      isRejected:true,
      isPending:false,
      user: action.payload,
      };
		case actions.fetchUser + actions.fulfilled:
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        user: action.payload.data.results,
        isRejected: false,
      };
    default:
      return state;
   }
};

export default userReducer;
