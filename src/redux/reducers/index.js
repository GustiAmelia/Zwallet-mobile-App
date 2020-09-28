import { combineReducers } from 'redux';
import authReducers from './auth';
import receiverReducers from './receiver';
import userReducer from './user';

const indexReducer = combineReducers({
    auth : authReducers,
    receiver : receiverReducers,
    user : userReducer,
});

export default indexReducer;
