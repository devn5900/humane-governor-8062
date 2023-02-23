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

const CatCard = ({ title, links }) => {
  return (
    <Box w={"95%"} m={"auto"}>
      <Heading textAlign={"center"} p={"0.5rem"} fontSize={"1.4rem"}>
        {title}
      </Heading>

      <Grid templateColumns="repeat(6, 1fr)">
        {links?.map((el) => {
          return (
            <GridItem>
              <Box textAlign={"center"}>
                <Image src={el.image} />
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CatCard;
