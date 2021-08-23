import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import Routes from './routes';
import Home from "./components/Home";

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
