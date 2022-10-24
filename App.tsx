import React from 'react';
import { StatusBar, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1 }} >
        <StatusBar barStyle='dark-content' backgroundColor="transparent" translucent />
    </View>
  );
};

export default App;
