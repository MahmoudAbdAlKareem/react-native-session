import React from "react";
import { Alert, Links, Platform, Transforms, Vibration } from "./index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="APIsDemo">
      <Stack.Screen name="APIsDemo" component={Links} />
      <Stack.Screen name="Alert" component={Alert} />
      <Stack.Screen name="Platform" component={Platform} />
      <Stack.Screen name="Vibration" component={Vibration} />
      <Stack.Screen name="Transforms" component={Transforms} />
    </Stack.Navigator>
  );
};

export default Routes;
