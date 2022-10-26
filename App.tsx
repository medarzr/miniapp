import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import Home from './Home';
import store from './redux/store';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (

    <Provider store={store} >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar barStyle='dark-content' backgroundColor="transparent" translucent />
        <Home />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
