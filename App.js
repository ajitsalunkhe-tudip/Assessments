/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './src/redux/reducer';
import Route from './src/navigators';

const middlewares = [];

// eslint-disable-next-line
if (__DEV__) {
	middlewares.push(applyMiddleware(logger));
}

const store = createStore(rootReducer, ...middlewares);

const App = () => (
	<Provider store={store}>
		<Route />
	 </Provider>
);

export default App;