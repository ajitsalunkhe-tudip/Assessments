/**
 * @format
 */

import React from 'react';
import renderer from 'react-test-renderer';
import ThankyouScreen from '../../Assessments/src/screens/thankyouScreen';


test('renders correctly', () => {
  const tree = renderer.create(<ThankyouScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});