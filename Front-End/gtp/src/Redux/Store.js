import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleWare from 'redux-thunk';

const reducers = combineReducers({});

let store = configureStore({
	reducer: reducers,
	middleware: [thunkMiddleWare],
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
