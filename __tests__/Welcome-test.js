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

jest.mock('../src/util/emulator', () => ({
  showEmulatorToast: jest.fn(),
}));

const store = mockStore({});
const props = { navigation: { navigate: jest.fn() } };
const component = (
  <Provider store={store}>
    <WelcomeScreen {...props} />
  </Provider>
);

describe('AddUser component test', () => {
  test('adds a new user when the button is pressed', () => {
    const { getByTestId } = render(component);
    fireEvent.changeText(getByTestId('input_name'), 'Test');
    fireEvent.press(getByTestId('save'));
    expect(props.navigation.navigate).toHaveBeenCalledWith('Variation');
  });

  test('should not navigate to another screen', () => {
    jest.clearAllMocks();
    const { getByTestId } = render(component);
    fireEvent.changeText(getByTestId('input_name'), '');
    fireEvent.press(getByTestId('save'));
    expect(props.navigation.navigate).not.toHaveBeenCalled();
  });
});
