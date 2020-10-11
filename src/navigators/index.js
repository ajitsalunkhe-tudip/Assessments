//@flow
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './../screens/welcomeScreen';
import VariationScreen from './../screens/variationScreen';
import ThankyouScreen from '../screens/thankyouScreen';


const Stack = createStackNavigator();

function navigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Variation" component={VariationScreen} />
        <Stack.Screen name="ThankYou" component={ThankyouScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigators;