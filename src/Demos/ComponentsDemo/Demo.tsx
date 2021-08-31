import React from "react";
import { Button, Center, Heading, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Demo = () => {
  const navigation = useNavigation();

  return (
    <VStack space={2} alignItems="center">
      <Heading>Main Components</Heading>
      <Center shadow={3}>
        <Button
          variant="ghost"
          size="lg"
          onPress={() => navigation.navigate('Button')}>
          Buttons
        </Button>
      </Center>
      <Center shadow={3}>
        <Button
          variant="ghost"
          size="lg"
          onPress={() => navigation.navigate('FlatList')}>
          Flat List
        </Button>
      </Center>
      <Center shadow={3}>
        <Button
          variant="ghost"
          size="lg"
          onPress={() => navigation.navigate('Image')}>
          Images
        </Button>
      </Center>
      <Center shadow={3}>
        <Button
          variant="ghost"
          size="lg"
          onPress={() => navigation.navigate('Text')}>
          Text
        </Button>
      </Center>
      <Center shadow={3}>
        <Button
          variant="ghost"
          size="lg"
          onPress={() => navigation.navigate('TouchableOpacity')}>
          TouchableOpacity
        </Button>
      </Center>
      <Center shadow={3}>
        <Button
          variant="ghost"
          size="lg"
          onPress={() => navigation.navigate('TextInput')}>
          TextInput
        </Button>
      </Center>
    </VStack>
  );
};

export default Demo;
