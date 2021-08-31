import React from "react";
import { ArrowForwardIcon, Box, Divider, HStack, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ComponentsDemo from "./ComponentsDemo/Routes";

const Stack = createNativeStackNavigator();

const Landing = () => {
  const navigation = useNavigation();
  return (
    <Box p={10}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Components Demo");
        }}>
        <HStack alignItems="center" justifyContent="space-between">
          <Text fontSize="lg">Components Demo</Text>
          <ArrowForwardIcon size={6} />
        </HStack>
      </TouchableOpacity>
      <Divider my={4} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("APIsDemo");
        }}>
        <HStack alignItems="center" justifyContent="space-between">
          <Text fontSize="lg">APIs Demo</Text>
          <ArrowForwardIcon size={6} />
        </HStack>
      </TouchableOpacity>
    </Box>
  );
};

export const Demos = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        options={{
          headerShown: false
        }}
        component={Landing}
      />
      <Stack.Screen
        name="Components Demo"
        options={{
          headerShown: false
        }}
        component={ComponentsDemo}
      />
    </Stack.Navigator>
  );
};

export default Demos;
