import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Disgns = () => {
  return (
    <Box>
      <Box p={"0.3rem"}>
        <Heading textAlign={"center"} fontSize={"1.5rem"}>
          DESIGN OF THE WEEK
        </Heading>
      </Box>
      <Flex>
        <Image
          w={"full"}
          src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1676955702.jpg"
        />
        <Image
          w={"full"}
          src=" https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1676955702.jpg"
        />
      </Flex>
    </Box>
  );
};

export default Disgns;
