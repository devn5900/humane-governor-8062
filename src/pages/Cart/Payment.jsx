import React, { useState } from "react";
import { Link } from "react-router-dom";
import boogylogo from "../../images/boogylogo.png";
import { Box, Image, Text, Button, Divider, Center } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { EMPTY_CART } from "../../Redux/Auth/actionType";

const Payment = () => {
  const crtData = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [cartdata, setCartdata] = useState(crtData);
  console.log("cartdata-pay:", cartdata.cartItem);

  const empCart = () => {
    dispatch({ type: EMPTY_CART });
  };

  let total = 0;
  let discount = 0;
  let totalAmount = 0;

  cartdata.cartItem?.forEach((el) => {
    total += el.price;
    let x = Math.floor(el.price / 8);
    discount += x;
    totalAmount = total - discount;
    console.log("total:", total);
  });

  console.log(
    "totalAmount:",
    totalAmount,
    "total:",
    total,
    "discount:",
    discount
  );

  return (
    <Box>
      <Box
        display="flex"
        gap="1%"
        w="75%"
        m="auto"
        mt="8"
        // border='2px solid black'
      >
        {/* right div */}
        <Box w="58%" m="auto" mt="0">
          <Box>
            <Text fontSize="lg" letterSpacing={1} as="b">
              Choose your payment method
            </Text>
          </Box>

          <Box
            border="2px solid #d1cccc"
            display="flex"
            gap="2"
            pt="0"
            h="400"
            mt="4"
            alignItems="center"
            color="grey"
          >
            <Box w="45%" mt="-16">
              <Box
                display="flex"
                gap="2"
                bg="#f7f7f7"
                p="5"
                mt="0"
                borderBottom="1px solid #d1cccc"
              >
                <Image
                  src="https://images.bewakoof.com/web/bank-card-fill-1645697857.svg"
                  alt="img"
                  w="6"
                  h="6"
                />
                <Text>Debit/Credit Card</Text>
              </Box>
              <Box
                display="flex"
                gap="2"
                bg="#f7f7f7"
                p="5"
                borderBottom="1px solid #d1cccc"
              >
                <Image
                  src="https://images.bewakoof.com/web/Group-1645705428.png"
                  alt="img"
                  w="6"
                  h="6"
                />
                <Text>Wallet</Text>
              </Box>
              <Box
                display="flex"
                gap="2"
                bg="#f7f7f7"
                p="5"
                borderBottom="1px solid #d1cccc"
              >
                <Image
                  src="https://images.bewakoof.com/web/upi-icon-1645705429.png"
                  alt="img"
                  w="6"
                  h="6"
                />
                <Text>UPI</Text>
              </Box>
              <Box
                display="flex"
                gap="2"
                bg="#f7f7f7"
                p="5"
                borderBottom="1px solid #d1cccc"
              >
                <Image
                  src="https://images.bewakoof.com/web/nb-icon-1645705428.png"
                  alt="img"
                  w="6"
                  h="6"
                />
                <Text>Net banking</Text>
              </Box>
              <Box
                display="flex"
                gap="2"
                p="5"
                borderBottom="1px solid #d1cccc"
              >
                <Image
                  src="https://images.bewakoof.com/web/cod-icon-1645705427.png"
                  alt="img"
                  w="6"
                  h="6"
                />
                <Text color="black" as="b">
                  Cash On Delivery
                </Text>
              </Box>
            </Box>
            <Box w="65%" h="100" mt="-18rem" p="2">
              <Text fontSize="lg" letterSpacing={0.8}>
                Cash Collection Charges: Costs ₹ 20 Extra
              </Text>
              <Link to="/thankyou">
                <Button
                  bg="#42a2a2"
                  fontSize="lg"
                  color="white"
                  w="100%"
                  h="12"
                  mt="4"
                  onClick={empCart}
                >
                  Pay ₹{totalAmount + 20}
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>

        <Center height="550">
          <Divider orientation="vertical" borderColor="grey" />
        </Center>

        {/* left div */}
        <Box w="40%" m="auto" mt="0" border="1px solid white">
          <Box p="3" borderRadius="6" pt="0">
            <Text letterSpacing={0.8} fontSize="14">
              Delivering order to{" "}
              <span style={{ fontWeight: "bold" }}>{loginuser.name}</span>{" "}
              Amravati, Maharashtra, 444603
            </Text>
          </Box>

          <Divider borderColor="grey" />

          <Box
            mt="2"
            mb="2"
            borderRadius="6"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="b" pl="3">
              You are paying for these items
            </Text>
            <Text letterSpacing={0.3} fontSize="12" p="1" pl="3">
              Men's Blue The Panda Way Graphic Printed Oversized T-shirtMen's
              Blue The Panda Way Graphic Printed Oversized T-shirt Estimated
              delivery by{" "}
              <span style={{ color: "#47cc82" }}>05 March 2023</span>
            </Text>
          </Box>

          <Divider borderColor="grey" />

          <Box mt="4">
            <Box p="2" mt="1" mb="4">
              <Text as="b" fontSize="14" letterSpacing={0.5} ml="2">
                PRICE SUMMARY
              </Text>
            </Box>
            <Box
              display="flex"
              p="1"
              letterSpacing={0.5}
              justifyContent="space-between"
              fontSize="12"
            >
              <Box>
                <Text ml="2">Total MRP (Incl. of taxes) </Text>
              </Box>
              <Box>
                <Text>₹{total} </Text>
              </Box>
            </Box>
            <Box
              display="flex"
              p="1"
              letterSpacing={0.5}
              justifyContent="space-between"
              fontSize="12"
            >
              <Box>
                <Text ml="2">Shipping Charges </Text>
              </Box>
              <Box>
                <Text color="#47cc82">FREE </Text>
              </Box>
            </Box>
            <Box
              display="flex"
              p="1"
              letterSpacing={0.5}
              justifyContent="space-between"
              fontSize="12"
            >
              <Box>
                <Text ml="2">Discount on MRP </Text>
              </Box>
              <Box>
                <Text>- ₹{discount}</Text>
              </Box>
            </Box>

            <Divider borderColor="grey" />

            <Box
              display="flex"
              letterSpacing={0.5}
              justifyContent="space-between"
              textAlign="center"
              alignItems="center"
              fontSize="12"
            >
              <Box ml="2">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#565454",
                  }}
                >
                  Final amount{" "}
                </span>
              </Box>
              <Text as="b" fontSize="16px">
                ₹{totalAmount}
              </Text>
            </Box>
            <Box
              display="flex"
              gap="20"
              m="auto"
              mt="8"
              justifyContent="space-evenly"
              pl="5"
              pr="5"
              alignItems="center"
              fontSize="8"
              textAlign="center"
            >
              <Box>
                <Box w="12" m="auto" justifyContent="center">
                  <Image
                    src="https://images.bewakoof.com/web/cart-badge-trust.svg"
                    alt="img"
                    w="10"
                    h="10"
                  />
                </Box>
                <Text>100% SECURE PAYMENTS</Text>
              </Box>
              <Box>
                <Box w="10" m="auto" justifyContent="center">
                  <Image
                    src="https://images.bewakoof.com/web/cart-easy-return.svg"
                    alt="img"
                    w="10"
                    h="10"
                  />
                </Box>
                <Text>EASY RETURNS & QUICK REFUNDS</Text>
              </Box>
              <Box>
                <Box w="10" m="auto" justifyContent="center">
                  <Image
                    src="https://images.bewakoof.com/web/quality-check.svg"
                    alt="img"
                    w="10"
                    h="10"
                  />
                </Box>
                <Text>QUALITY ASSURANCE</Text>
              </Box>
            </Box>

            <Center display="flex" w="50">
              <Divider borderColor="grey" w="40" h="5" />
              <Text mt="5" fontSize="sm" pl="2" pr="2">
                {" "}
                We Accept{" "}
              </Text>
              <Divider borderColor="grey" w="40" h="5" />
            </Center>

            <Box
              display="flex"
              gap="2"
              m="auto"
              mt="5"
              pl="35"
              pr="45"
              alignItems="center"
              fontSize="8"
              textAlign="center"
            >
              <Box w="12" m="auto" justifyContent="center">
                <Image
                  src="https://images.bewakoof.com/web/google-pay-logo.svg"
                  alt="img"
                  w="14"
                  h="14"
                />
              </Box>

              <Box w="12" m="auto" justifyContent="center">
                <Image
                  src="https://images.bewakoof.com/web/upi-sign.svg"
                  alt="img"
                  w="14"
                  h="14"
                />
              </Box>

              <Box w="12" m="auto" justifyContent="center">
                <Image
                  src="https://images.bewakoof.com/web/phone-pay-logo.svg"
                  alt="img"
                  w="14"
                  h="14"
                />
              </Box>

              <Box w="12" m="auto" justifyContent="center">
                <Image
                  src="https://images.bewakoof.com/web/visa-card-logo-9.svg"
                  alt="img"
                  w="14"
                  h="14"
                />
              </Box>

              <Box w="12" m="auto" justifyContent="center">
                <Image
                  src="https://images.bewakoof.com/web/master-card.svg"
                  alt="img"
                  w="14"
                  h="14"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box w="75%" m="auto" mt="10%">
        {/* <Box border='2px solid red' w='20%'> */}
        <Center>
          <Image
            src="https://images.bewakoof.com/web/secure-payments-image.png"
            alt="img"
            w="18rem"
            h="6"
          />
        </Center>
        {/* </Box> */}
      </Box>
    </Box>
  );
};

export default Payment;
