import { combineReducers } from 'redux';
import authReducers from './auth';
import userReducers from './user';
import transactionReducers from './transaction';


const indexReducer = combineReducers({
    auth : authReducers,
    user : userReducers,
    transaction : transactionReducers,
});

export default indexReducer;
