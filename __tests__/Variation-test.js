/**
 * @format
 */

import React from 'react';
import renderer from 'react-test-renderer';
import VariationScreen from '../../Assessments/src/screens/variationScreen';


test('renders correctly', () => {
  const tree = renderer.create(<VariationScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});