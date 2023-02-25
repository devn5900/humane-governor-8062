import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import FootLinks from "./FooterChilds/FootLinks";
import FootOther from "./FooterChilds/FootOther";

const Footer = () => {
  return (
    <Box p={"2rem"} mt={"2rem"} zIndex={1000} bg={"blackAlpha.800"}>
      <Box w={"80%"} m={"auto"}>
        <Heading color={"#D04D48"}>Boogy®</Heading>
        <Flex gap={"3rem"}>
          <FootLinks />
          <FootOther />
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
