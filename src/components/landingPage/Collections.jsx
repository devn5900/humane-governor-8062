import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Collections = ({ title, coll }) => {
  return (
    <Box w={"95%"} m={"auto"}>
      <Heading textAlign={"center"} p={"0.5rem"} fontSize={"1.4rem"}>
        {title}
      </Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        {coll?.map((el) => {
          return (
            <GridItem>
              <Box>
                <Image src={el.image} />
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Collections;
