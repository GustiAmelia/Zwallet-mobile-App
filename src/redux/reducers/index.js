import { combineReducers } from 'redux';
import authReducers from './auth';

const indexReducer = combineReducers({
    auth : authReducers,
});

export default indexReducer;
