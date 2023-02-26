import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Text, Button, Divider } from "@chakra-ui/react";

import boogylogo from "../../images/boogylogo.png";

const EmptyCart = () => {
  let loginuser = JSON.parse(localStorage.getItem("loggedInUser"));
  console.log("loginuser:", loginuser.name);

  return (
    <Box>
      <Box w="30%" m="auto" alignItems="center" textAlign="center" mt="6">
        <Box m="auto" w="40%" mb="2">
          <Image
            src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png"
            alt="img"
            w={"10rem"}
          />
          <Text fontSize="lg" letterSpacing={1} mt="2">
            Nothing in the bag
          </Text>
        </Box>

        <Link to="/">
          <Button
            border="2px solid #51cccc"
            color="#51cccc"
            bg="white"
            fontSize="20"
            h="12"
          >
            Continue Shopping
          </Button>
        </Link>

        <Divider borderColor="grey" w="100%" mt="8" mb="5" />
        <Text fontSize="md" letterSpacing={1}>
          You could try one of these categories:
        </Text>

        <Box mt="2">
          <Box display="flex" gap="24" justifyContent="left" mb="8">
            <Text>Men</Text>
            <Box
              display="flex"
              gap="20"
              w="60%"
              justifyContent="left"
              color="#51cccc"
            >
              <Box display="grid">
                <Link to="">
                  <Text as="u">Topwear</Text>
                </Link>
                <Link to="">
                  <Text as="u">Footwear</Text>
                </Link>
              </Box>
              <Box display="grid">
                <Link to="">
                  <Text as="u">Bottomwear</Text>
                </Link>
                <Link to="">
                  <Text as="u">Bestsellers</Text>
                </Link>
              </Box>
            </Box>
          </Box>

          <Box display="flex" gap="20" justifyContent="left" mb="8">
            <Text>Women</Text>
            <Box
              display="flex"
              gap="20"
              w="60%"
              justifyContent="left"
              color="#51cccc"
            >
              <Box display="grid">
                <Link to="">
                  <Text as="u">Topwear</Text>
                </Link>
                <Link to="">
                  <Text as="u">Bestsellers</Text>
                </Link>
              </Box>
              <Box display="grid">
                <Link to="">
                  <Text as="u">Bottomwear</Text>
                </Link>
              </Box>
            </Box>
          </Box>

          <Box display="flex" gap="10" justifyContent="left" mb="5">
            <Text>Mobile Covers</Text>
            <Link to="">
              <Text as="u" color="#51cccc">
                All Mobile Covers
              </Text>
            </Link>
          </Box>
        </Box>

        <Box m="auto" w="40%" mt="4">
          <Image
            src="https://images.bewakoof.com/web/secure-payments-image.png"
            w={"16rem"}
            alt="img"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default EmptyCart;
