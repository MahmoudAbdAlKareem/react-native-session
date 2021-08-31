import React from "react";
import Links from "./Links";
import ReactQueryDemo from "./ReactQueryDemo";
import FetchDemo from "./FetchDemo";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Landing">
      <Stack.Screen name="Landing" component={Links} />
      <Stack.Screen name="FetchDemo" component={FetchDemo} />
      <Stack.Screen name="ReactQueryDemo" component={ReactQueryDemo} />
    </Stack.Navigator>
  );
};

export default Routes;
