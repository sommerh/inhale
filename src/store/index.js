import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import breath from './breath';

const reducer = combineReducers({ breath });

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

export default store;
