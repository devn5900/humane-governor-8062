import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { Link as ReachLink } from "react-router-dom";
const NavSections = () => {
  return (
    <Box>
      <Flex
        p={"1rem"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"3rem"}
      >
        <Link textDecoration={"none"} to="#" as={ReachLink}>
          MEN
        </Link>
        <Link textDecor={"none"} to="#" as={ReachLink}>
          WOMEN
        </Link>
        <Link textDecor={"none"} to="/accessories" as={ReachLink}>
          ACCESSORIES
        </Link>
      </Flex>
    </Box>
  );
};

export default NavSections;
