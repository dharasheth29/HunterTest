import { configureStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import getDataReducer from './reducer';

const rootReducer = combineReducers({ getDataReducer });

export const Store = configureStore(rootReducer, applyMiddleware(thunk));