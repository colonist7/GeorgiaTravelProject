import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleWare from 'redux-thunk';
import { ContactReducer } from '../Redux/Reducers/ContactReducer';
import { AuthReducer } from '../Redux/Reducers/AuthReducer';

const reducers = combineReducers({ ContactReducer, AuthReducer });

let store = configureStore({
	reducer: reducers,
	middleware: [thunkMiddleWare],
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
