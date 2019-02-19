import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducers';
import { thunk } from '../middleware/thunk';
import { logger } from 'redux-logger';

export const configureStore = (preloadedState = {}) => createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

