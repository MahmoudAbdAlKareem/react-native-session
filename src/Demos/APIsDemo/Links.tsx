import React from "react";
import { Button, Center, Heading, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Links = () => {
  const navigation = useNavigation();

  return (
    <VStack space={2} alignItems="center">
      <Heading>Main APIs</Heading>
      <Center shadow={3}>
        <Button
          variant="ghost"
          size="lg"
          onPress={() => navigation.navigate("Platform")}>
          Platform
        </Button>
      </Center>
      <Center shadow={3}>
        <Button
          variant="ghost"
          size="lg"
          onPress={() => navigation.navigate("Alert")}>
          Alert
        </Button>
      </Center>
      <Center shadow={3}>
        <Button
          variant="ghost"
          size="lg"
          onPress={() => navigation.navigate("Vibration")}>
          Vibration
        </Button>
      </Center>
      <Center shadow={3}>
        <Button
          variant="ghost"
          size="lg"
          onPress={() => navigation.navigate("Transforms")}>
          Transforms
        </Button>
      </Center>
    </VStack>
  );
};

export default Links;
