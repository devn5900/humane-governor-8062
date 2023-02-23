import { Box, Divider } from "@chakra-ui/react";
import React from "react";
import Links from "./NavChilds/Links";
import NavMain from "./NavChilds/NavMain";
import NavSections from "./NavChilds/NavSections";

const Navbar = () => {
  return (
    <Box fontFamily={"montserrat,sans-serif"}>
      <Links />
      <NavMain />
      <Divider borderColor={"blackAlpha.500"} />
      <NavSections />
    </Box>
  );
};

export default Navbar;
