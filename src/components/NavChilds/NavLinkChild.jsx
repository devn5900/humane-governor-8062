import React from "react";
import {
  Box,
  Flex,
  Link,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const NavLinkChild = ({ title, child }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   console.log(child);
  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton
        onMouseEnter={onOpen}
        _hover={{ borderBottom: "5px solid #DF665A" }}
        onMouseLeave={onClose}
      >
        <Link as={ReachLink} to={"/men"}>
          {title}
        </Link>
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        <MenuItem cursor={"default"} _hover={{ bg: "white" }}>
          <Box p="1rem">
            <Flex gap={"2rem"}>
              {child?.map((el) => {
                return (
                  <List spacing={2} key={Math.random() * 100}>
                    <Text fontSize={"1.1rem"}>{el.inTitle}</Text>
                    {el?.inChild?.map((ele) => {
                      return (
                        <ListItem key={Math.random() * 100 + 1}>
                          <Text
                            cursor={"pointer"}
                            color={"blackAlpha.700"}
                            fontSize={"0.8rem"}
                          >
                            {ele}
                          </Text>
                        </ListItem>
                      );
                    })}
                  </List>
                );
              })}
            </Flex>
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavLinkChild;
