import * as actions from '../actions/actionTypes';

const initialState = {
	isLoggedIn:false,
	isPending:false,
	isFulfilled: false,
  isRejected: false,
  data :null,
  register:false,
  pinSuccess:false,
  isValidPin:false,
};

const authReducers = (state = initialState,action) => {
  switch (action.type){
		case actions.fetchLogin + actions.pending:
      return {
      ...state,
      isPending:true,
      };
		case actions.fetchLogin + actions.rejected:
      return {
      ...state,
      isRejected:true,
      isPending:false,
      data: action.payload,
      };
		case actions.fetchLogin + actions.fulfilled:
      let login = null;
      if (action.payload.data.isSuccess){
        login = true;
      } else {
        login = false;
      }
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        data: action.payload.data.results.data,
        isRejected: false,
        isLoggedIn: login,
        register:false,
        pinSuccess:false,
      };
    case actions.isRegistered + actions.pending:
      return {
        ...state,
        isPending:true,
      };
    case actions.isRegistered + actions.rejected:
      return {
        ...state,
        isRejected:true,
        isPending:false,
        data: action.payload,
      };
    case actions.isRegistered + actions.fulfilled:
      let signup = null;
      if (action.payload.data.isSuccess){
        signup = true;
      } else {
        signup = false;
      }
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        data:action.payload.data.results,
        isRejected: false,
        isLoggedIn: false,
        register:signup,
        pinSuccess:false,
      };
    case actions.createPin + actions.pending:
      return {
        ...state,
        isPending:true,
      };
    case actions.createPin + actions.rejected:
      return {
        ...state,
        isRejected:true,
        isPending:false,
      };
    case actions.createPin + actions.fulfilled:
      let pinSuccess = null;
      if (action.payload.data.isSuccess){
        pinSuccess = true;
      } else {
        pinSuccess = false;
      }
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        isRejected: false,
        isLoggedIn: false,
        register:true,
        pinSuccess:pinSuccess,
      };
    case actions.checkPin + actions.pending:
      return {
        ...state,
        isPending:true,
      };
    case actions.checkPin + actions.rejected:
      return {
        ...state,
        isRejected:true,
        isPending:false,
      };
    case actions.checkPin + actions.fulfilled:
      let validPin = null;
      if (action.payload.data.isSuccess){
        validPin = true;
      }
      else {
        validPin = false;
      }
      return {
        ...state,
        isValidPin:validPin,
      };
    case actions.isLoggedOut:
      return {
        ...state,
        data: null,
        isLoggedIn: false,
        isPending: false,
        isFulfilled: false,
        isRejected: false,
        register:false,
      };
    default:
      return state;
   }
};

export default authReducers;
