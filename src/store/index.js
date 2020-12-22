import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {userReducer} from './user/Reducer';

const rootReducer = combineReducers({
    user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
