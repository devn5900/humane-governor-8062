import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BsPhone } from "react-icons/bs";
const Links = () => {
  return (
    <Flex
      bg={"gray.200"}
      fontSize={"0.7rem"}
      justifyContent={"space-around"}
      p="0.2rem"
      alignItems={"center"}
    >
      <Flex gap={"1rem"} alignItems={"center"}>
        <Text>Offers</Text>
        <Text>Fanbook</Text>
        <Text>
          <Icon as={BsPhone} />
          Download App
        </Text>
        <Text>Membership</Text>
      </Flex>
      <Flex gap={"1rem"} alignItems={"center"}>
        <Text>Download App</Text>
        <Text>Membership</Text>
      </Flex>
    </Flex>
  );
};

export default Links;
