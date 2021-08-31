import React from "react";
import { Button, Demo, FlatList, Image, Text, TextInput, TouchableOpacity } from "./index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Components Demo">
      <Stack.Screen name="Components Demo" component={Demo} />
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
