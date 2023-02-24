import {
  Box,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { BsPinterest, BsSnapchat, BsApple } from "react-icons/bs";
const FootOther = () => {
  return (
    <Flex gap={"5rem"}>
      <Box pt={"1.5rem"}>
        <Heading fontSize={"1.1rem"} color={"#D04D48"}>
          CONNECT WITH US
        </Heading>
        <List pt={"1rem"} spacing={2} color={"white"}>
          <ListItem>
            <Flex alignItems={"center"} gap={"0.3rem"}>
              <Icon fontSize={"1.2rem"} as={AiFillFacebook} />
              <Text fontSize={"0.9rem"}>4.7M People Like this</Text>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex alignItems={"center"} gap={"0.3rem"}>
              <Icon fontSize={"1.2rem"} as={AiFillInstagram} />
              <Text fontSize={"0.9rem"}>1M Follwers</Text>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={"0.3rem"}
            >
              <Icon fontSize={"1.2rem"} as={SiTwitter} />
              <Icon fontSize={"1.2rem"} as={BsPinterest} />
              <Icon fontSize={"1.2rem"} as={BsSnapchat} />
              <Icon fontSize={"1.2rem"} as={BsApple} />
            </Flex>
          </ListItem>
        </List>
      </Box>
      <Box pt={"1.5rem"}>
        <Heading fontSize={"1.1rem"} color={"#D04D48"}>
          CONNECT WITH US
        </Heading>
        <List pt={"1rem"} spacing={2} color={"white"}>
          <ListItem>
            <Flex alignItems={"center"} gap={"0.3rem"}>
              <InputGroup>
                <Input
                  type="email"
                  border={"none"}
                  borderBottom={"2px solid #D04D48"}
                  placeholder="Enter email id"
                />
                <InputRightAddon
                  bg={"#D04D48"}
                  borderColor={"#D04D48"}
                  children="Subscribe"
                />
              </InputGroup>
            </Flex>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default FootOther;
