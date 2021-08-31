import React from "react";
import { ArrowForwardIcon, Box, Divider, HStack, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ComponentsDemo from "./ComponentsDemo/Routes";
import APIsDemo from "./APIsDemo/Routes";
import NetworkingDemo from "./Networking/Routes";

const Stack = createNativeStackNavigator();

const Landing = () => {
  const navigation = useNavigation();
  return (
    <Box p={10}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ComponentsDemo");
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
      <Divider my={4} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("NetworkingDemo");
        }}>
        <HStack alignItems="center" justifyContent="space-between">
          <Text fontSize="lg">Networking Demo</Text>
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
        name="ComponentsDemo"
        options={{
          headerShown: false
        }}
        component={ComponentsDemo}
      />
      <Stack.Screen
        name="APIsDemo"
        options={{
          headerShown: false
        }}
        component={APIsDemo}
      />
      <Stack.Screen
        name="NetworkingDemo"
        options={{
          headerShown: false
        }}
        component={NetworkingDemo}
      />
    </Stack.Navigator>
  );
};

export default Demos;
