import React from "react";
import { Button, FlatList, Image, Links, Text, TextInput, TouchableOpacity } from "./index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="ComponentsDemo">
      <Stack.Screen name="ComponentsDemo" component={Links} />
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
