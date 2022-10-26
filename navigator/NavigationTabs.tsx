/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons//MaterialCommunityIcons';
import AnimationScreen from '../screens/AnimationScreens/AnimationScreen';
import ProfileStack from './ProfileStack';
import NewsStack from './NewsStack';
import { headerStyle } from '../constants/Layout';

const Tab = createBottomTabNavigator();

export default function NavigationTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ProfileStack}
        options={() => ({
          tabBarIcon: ({ focused, color }) => (
            <View style={{ borderWidth: focused ? 2 : 0, borderRadius: 125, borderColor: color }}>
              <Image
                style={styles.userImage}
                source={require('../assets/images/man.jpg')}
              />
            </View>
          ),
          ...headerStyle('Профиль', false),
        })}
      />
      <Tab.Screen
        name="Анимации"
        component={AnimationScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcon name="animation" size={20} color={color} />
          ),
          ...headerStyle('Анимации', false),
        })}
      />
      <Tab.Screen
        name="Новости"
        component={NewsStack}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon name="newspaper-o" size={20} color={color} />
          ),
          ...headerStyle('Новости', false),
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  userImage: {
    width: 20,
    height: 20,
    borderRadius: 125,
  },
});
