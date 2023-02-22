import {
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
} from "@chakra-ui/react";
import React from "react";
import boogylogo from "../../images/boogylogo.png";
import { Link as ReachLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import NavLinkChild from "./NavLinkChild";
const NavMain = () => {
  const navItem = [
    {
      title: "MEN",
      child: [
        {
          inTitle: "Topwear",
          inChild: [
            "Printed T-Shirts",
            "Oversized T-shirts",
            "Plain T-Shirts",
            "Fashion T-Shirts",
            "Activewear T-Shirts",
            "Full Sleeve T-Shirts",
            "Half Sleeve T-Shirts",
            "Shirts",
            "Vests",
            "Co-ord Sets",
            "Kurtas",
            "Henleys",
            "Plus Size Topwear",
            "Polo T-Shirts",
            "Jackets",
            "Sweatshirts & Hoodies",
            "Sweaters",
            "Customize T-shirts",
            "T-shirt Combos",
            "All Topwear",
          ],
        },
      ],
    },
    {
      title: "WOMEN",
      child: [
        {
          inTitle: "Topwear",
          inChild: [
            "Printed T-Shirts",
            "Oversized T-shirts",
            "Plain T-Shirts",
            "Fashion T-Shirts",
            "Activewear T-Shirts",
            "Full Sleeve T-Shirts",
            "Half Sleeve T-Shirts",
            "Shirts",
            "Vests",
            "Co-ord Sets",
            "Kurtas",
            "Henleys",
            "Plus Size Topwear",
            "Polo T-Shirts",
            "Jackets",
            "Sweatshirts & Hoodies",
            "Sweaters",
            "Customize T-shirts",
            "T-shirt Combos",
            "All Topwear",
          ],
        },
      ],
    },
    {
      title: "ACCESSORIES",
      child: [
        {
          inTitle: "Topwear",
          inChild: [
            "Printed T-Shirts",
            "Oversized T-shirts",
            "Plain T-Shirts",
            "Fashion T-Shirts",
            "Activewear T-Shirts",
            "Full Sleeve T-Shirts",
            "Half Sleeve T-Shirts",
            "Shirts",
            "Vests",
            "Co-ord Sets",
            "Kurtas",
            "Henleys",
            "Plus Size Topwear",
            "Polo T-Shirts",
            "Jackets",
            "Sweatshirts & Hoodies",
            "Sweaters",
            "Customize T-shirts",
            "T-shirt Combos",
            "All Topwear",
          ],
        },
      ],
    },
  ];

  return (
    <Flex alignItems={"center"} p={"0.5rem"} justifyContent={"space-around"}>
      <Flex gap="2rem" alignItems={"center"}>
        <Box>
          <Link as={ReachLink} to="/">
            <Image src={boogylogo} w={"7rem"} />
          </Link>
        </Box>
        <Flex
          gap="1rem"
          fontSize={"0.9rem"}
          fontFamily={"montserrat,sans-serif"}
          alignItems={"center"}
        >
          {navItem?.map((el) => {
            return <NavLinkChild title={el.title} child={el.child} />;
          })}
        </Flex>
      </Flex>
      <Flex gap="1rem" alignItems={"center"}>
        <Box>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="blackAlpha.500"
              children={<BsSearch />}
            />
            <Input
              fontSize={"0.8rem"}
              type="text"
              htmlSize={28}
              bg="blackAlpha.100"
              placeholder="Search by product, category or title"
            />
          </InputGroup>
        </Box>

        <Flex gap="1rem" alignItems={"center"}>
          <Link to={"/login"}>Account</Link>
          <Link to={"/cart"}>
            <Box pos="relative">
              <Icon as={AiOutlineShoppingCart} fontSize={"1.7rem"} />
              <Badge
                pos={"absolute"}
                right="-2px"
                top="-5px"
                borderRadius={"full"}
                bg={"blackAlpha.900"}
                color={"white"}
              >
                5
              </Badge>
            </Box>
          </Link>
          <Link to={"#"}>
            <Image
              borderRadius="full"
              boxSize="2rem"
              src="https://images.bewakoof.com/web/india-flag-round-1639566913.png"
              alt="country"
            />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavMain;
