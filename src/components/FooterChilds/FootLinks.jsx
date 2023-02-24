import { Box, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import { footItem } from "./FooterData";

const FootLinks = () => {
  return (
    <Flex gap={"5rem"}>
      {footItem?.map((el) => {
        return (
          <Box pt={"1.5rem"} key={Math.random() * 100 + 9}>
            <Heading fontSize={"1.1rem"} color={"#D04D48"}>
              {el.title}
            </Heading>
            <List pt={"1rem"} spacing={1} color={"white"}>
              {el?.links.map((e) => {
                return (
                  <ListItem key={Math.random() * 100 + 10}>
                    <Text fontSize={"0.9rem"}>{e}</Text>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        );
      })}
    </Flex>
  );
};

export default FootLinks;
