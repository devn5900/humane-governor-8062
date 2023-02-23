import { Box, Image } from "@chakra-ui/react";
import React from "react";

const OfferImage = ({ image }) => {
  return (
    <Box>
      <Image w={"full"} src={image} />
    </Box>
  );
};

export default OfferImage;
