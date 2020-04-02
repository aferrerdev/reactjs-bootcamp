import { createStore, compose } from 'redux';
import reducers from './../reducers'
/**
 * Used to enable Redux tab in Chrome Developer Tools
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, {}, composeEnhancers());