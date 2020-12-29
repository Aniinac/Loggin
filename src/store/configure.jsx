import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';


const logger = createLogger({
    level: 'info',
    collapsed: true
})



export const store = configureStore({
    reducer: rootReducer,
    middleware: [logger, thunkMiddleware,...getDefaultMiddleware()]
});