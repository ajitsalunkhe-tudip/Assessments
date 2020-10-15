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
import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducer';
import Route from './src/navigators';

const middlewares = [];
middlewares.push(applyMiddleware(thunk));

const store = createStore(rootReducer, ...middlewares);

const App = () => (
  <Provider store={store}>
    <Route />
  </Provider>
);

export default App;
