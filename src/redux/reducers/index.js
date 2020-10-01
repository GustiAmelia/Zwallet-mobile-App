import { combineReducers } from 'redux';
import authReducers from './auth';
import receiverReducers from './receiver';
import transactionReducers from './transaction';


const indexReducer = combineReducers({
    auth : authReducers,
    receiver : receiverReducers,
    transaction : transactionReducers,
});

export default indexReducer;
