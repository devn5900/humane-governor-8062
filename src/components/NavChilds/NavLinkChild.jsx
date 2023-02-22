import React from "react";
import {
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const NavLinkChild = ({ title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
        <Link
          as={ReachLink}
          to={"/men"}
          _hover={{ borderBottom: "5px solid #DF665A" }}
        >
          {title}
        </Link>
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavLinkChild;
