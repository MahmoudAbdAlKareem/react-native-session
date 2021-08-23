import React from 'react';
import {
  ArrowForwardIcon,
  Box,
  Button,
  Center,
  Heading,
  Image,
  NativeBaseProvider,
  Stack,
  Text,
} from 'native-base';
import moment from 'moment';

function CardComponent() {
  return (
    <Box bg="white" shadow={2} rounded="lg" maxWidth="90%">
      <Image
        source={require('./test.png')}
        alt="image base"
        resizeMode="cover"
        size="2xl"
        borderRadius={100}
        width="auto"
        roundedTop="md"
      />
      <Stack space={4} p={[4, 4, 8]}>
        <Text color="gray.400">{moment().format('YYYY/MM/DD').toString()}</Text>
        <Heading size={['md', 'lg', 'md']} noOfLines={2}>
          React Native Crash Course
        </Heading>
        <Button colorScheme="gray" bg="gray.100" endIcon={<ArrowForwardIcon />}>
          Let's Have Fun!
        </Button>
      </Stack>
    </Box>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <CardComponent />
      </Center>
    </NativeBaseProvider>
  );
}
