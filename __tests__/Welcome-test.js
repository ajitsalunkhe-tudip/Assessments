/**
 * @format
 */

import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from '../../Assessments/src/screens/welcomeScreen';


test('renders correctly', () => {
  const tree = renderer.create(<WelcomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});