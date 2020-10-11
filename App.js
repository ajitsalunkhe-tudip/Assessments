/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/redux/reducer';
import Route from './src/navigators';
import 'react-native-gesture-handler';

const store = createStore(rootReducer);

const App = () => (
	<Provider store={store}>
		<Route />
	 </Provider>
);

export default App;