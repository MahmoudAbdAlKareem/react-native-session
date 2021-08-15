import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Button from './Button';
const Stack = createNativeStackNavigator();

const Demo = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Button" component={Button} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Demo;
