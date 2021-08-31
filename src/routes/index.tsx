import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Demos from "../Demos";
import Home from "../components/Home";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Demos"
        options={{
          headerTitle: "Landing Page"
        }}
        component={Demos}
      />
    </Stack.Navigator>
  );
};

export default Routes;
