import { combineReducers } from 'redux';
import authReducers from './auth';
import receiverReducers from './receiver';


const indexReducer = combineReducers({
    auth : authReducers,
    receiver : receiverReducers,
});

export default indexReducer;
