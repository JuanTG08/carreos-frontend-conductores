import React from "react";
import {
  Alert,
  HStack,
  VStack,
  Text,
  Center,
} from "native-base";

const AlertView = ({status, title, margTop = "3"}) => {
  return (
    <Center>
      <Alert minW="95%" maxW="95%" status={status} mt={margTop} mb="1" colorScheme={status} variant="top-accent">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} justifyContent="space-between">
            <HStack space={2} flexShrink={1}>
              <Alert.Icon mt="1" />
              <Text maxW="95%" fontSize="sm" color="coolGray.600">
                {title}
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </Alert>
    </Center>
  );
};

export default AlertView;
