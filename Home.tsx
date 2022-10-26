import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import NavigationTabs from './navigator/NavigationTabs';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer >
        <NavigationTabs />
      </NavigationContainer>
    </View>
  );
}
export default Home;