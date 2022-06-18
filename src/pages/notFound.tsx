import { Flex, Text } from "@chakra-ui/react";

function NotFound() {
  return (
    <Flex
      w="100%"
      maxW="100vh"
      h="100%"
      maxH="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Text>
        404 - Page not found
      </Text>
    </Flex>
  )
}

export default NotFound;
