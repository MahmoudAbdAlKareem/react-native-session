import React from 'react';
import {
  Button,
  Demo,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from './index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Demo">
      <Stack.Screen name="Demo" component={Demo} />
      <Stack.Screen name="TouchableOpacity" component={TouchableOpacity} />
      <Stack.Screen name="Button" component={Button} />
      <Stack.Screen name="FlatList" component={FlatList} />
      <Stack.Screen name="Image" component={Image} />
      <Stack.Screen name="Text" component={Text} />
      <Stack.Screen name="TextInput" component={TextInput} />
    </Stack.Navigator>
  );
};

export default Routes;
