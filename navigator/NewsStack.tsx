import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NewsScreen from '../screens/NewsScreens/NewsScreen';
import CurrentNewsScreen from '../screens/NewsScreens/CurrentNewsScreen';
import { headerStyle } from '../constants/Layout';

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={headerStyle('Новости', true)}
      />
      <Stack.Screen
        name="CurrentNewsScreen"
        component={CurrentNewsScreen}
        options={headerStyle('CurrentNewsScreen', false)}
      />
    </Stack.Navigator>
  );
}
