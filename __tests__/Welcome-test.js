/**
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react-native';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import WelcomeScreen from '../src/screens/welcomeScreen';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('AddUser component test', () => {
  test('adds a new user when the button is pressed', () => {
    const store = mockStore({});
    const props = { navigation: { navigate: jest.fn() } };
    
    const component = (
      <Provider store={store}>
        <WelcomeScreen {...props}/>
      </Provider>
    );

    const { getByTestId } = render(component);

    fireEvent.changeText(getByTestId('input_name'), 'Test');
    fireEvent.press(getByTestId('save'));

    // expect(getByTestId('input_name').props.navigation.navigate).toHaveBeenCalled();

    expect(props.navigation.navigate).toHaveBeenCalledWith('Variation');
  });
});