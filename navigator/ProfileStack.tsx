import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import ProfileEditScreen from '../screens/ProfileScreens/ProfileEditScreen';
import { headerStyle } from '../constants/Layout';

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={headerStyle('Профиль', false)}
      />
      <Stack.Screen
        name="ProfileEditScreen"
        component={ProfileEditScreen}
        options={headerStyle('Редактирование профиля', true)}
      />
    </Stack.Navigator>
  );
}
