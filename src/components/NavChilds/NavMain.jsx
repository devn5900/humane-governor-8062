import {
  Badge,
  Box,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";
import boogylogo from "../../images/boogylogo.png";
import { Link as ReachLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import NavLinkChild from "./NavLinkChild";
import { searchSuggestions } from "../../utils/api";
const NavMain = () => {
  const [search, setSearch] = useState("");
  const [mapSearch, setMapSearch] = useState([]);
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
        {
          inTitle: "Bottomwear",
          inChild: [
            " Joggers",
            " Pyjamas",
            " Shorts",
            " Jeans & Denims",
            " Boxers",
            " Briefs",
            " Trunks",
            " Hipster Trunks",
            " Trousers & Pants",
            " Activewear Shorts",
            " Activewear Joggers",
            " Plus Size Bottomwear",
            " All Bottomwear",
          ],
        },
        {
          inTitle: "Winterwear",
          inChild: [
            "Sweatshirts & Hoodies",
            "Jackets",
            "Sweaters",
            "Joggers",
            "Full Sleeve T-Shirts",
            "Plus Size",
          ],
        },
        {
          inTitle: " Sports & Activewear",
          inChild: [
            " Activewear T-Shirts",
            " Activewear Shorts",
            " Activewear Joggers",
            " Accessories",
          ],
        },
        {
          inTitle: "Footwear",
          inChild: ["Sliders", "Clogs", "Casual shoes", "Socks"],
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
            "Kurtis",
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
        {
          inTitle: "Bottomwear",
          inChild: [
            " Joggers",
            " Pyjamas",
            " Shorts",
            " Jeans & Denims",
            " Boxers",
            " Briefs",
            " Trunks",
            " Hipster Trunks",
            " Trousers & Pants",
            " Activewear Shorts",
            " Activewear Joggers",
            " Plus Size Bottomwear",
            " All Bottomwear",
          ],
        },
        {
          inTitle: "Winterwear",
          inChild: [
            "Sweatshirts ",
            "Hoodies",
            "Jackets",
            "Sweaters",
            "Joggers",
            "Full Sleeve T-Shirts",
            "Plus Size",
          ],
        },
        {
          inTitle: " Loungewear",
          inChild: [
            "Shorts",
            "Pyjamas",
            "Lounge Wear",
            "Boxers",
            "Top & Bottom Sets",
            "Nightdress",
          ],
        },
      ],
    },
    {
      title: "ACCESSORIES",
      child: [
        {
          inTitle: "Xiaomi",
          inChild: ["Mi 12 Pro 5G", "Redmi 9 Power", "Redmi 10A"],
        },
        {
          inTitle: "Oneplus",
          inChild: ["OnePlus 9R", "OnePlus Nord N20 SE", "OnePlus 9RT"],
        },
        {
          inTitle: "Apple",
          inChild: ["iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus"],
        },
        {
          inTitle: "Samsung",
          inChild: [
            "Samsung Galaxy Note 10 lite",
            "Samsung Galaxy Note 10 Plus",
            "Samsung galaxy M11",
          ],
        },
        {
          inTitle: "Realme",
          inChild: ["Realme 5 Pro", "Realme 5", "RealMe Narzo 50i"],
        },
        {
          inTitle: "Vivo",
          inChild: ["Vivo S1", "Vivo Y22", "VIVO V5s"],
        },
      ],
    },
  ];

  const searchFunc = (e) => {
    if (!e.target.value) {
      setSearch(e.target.value);
      setMapSearch([]);
    } else {
      setSearch(e.target.value);
    }
  };

  useEffect(() => {
    if (search !== "") {
      searchSuggestions(search).then((res) => {
        const val = res?.reduce((acc, el) => {
          let obj = {};
          obj.title = el.name.split(" ").splice(0, 5).join(" ");
          obj.id = el.id;
          acc.push(obj);
          return acc;
        }, []);
        setMapSearch(val);
      });
    } else {
      setMapSearch([]);
      if (mapSearch.length == 0) {
      }
    }

    return () => {
      setMapSearch([]);
    };
  }, [search]);
  console.log(mapSearch);
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
            return (
              <NavLinkChild
                key={Math.random() * 100 + 2}
                title={el.title}
                child={el.child}
              />
            );
          })}
        </Flex>
      </Flex>
      <Flex gap="1rem" alignItems={"center"}>
        <Box pos={"relative"}>
          <Box>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="blackAlpha.500"
                children={<BsSearch />}
              />
              <Input
                fontSize={"0.7rem"}
                type="text"
                htmlSize={30}
                bg="blackAlpha.100"
                onChange={searchFunc}
                value={search}
                placeholder="Search by product, category or title"
              />
            </InputGroup>
          </Box>
          {mapSearch.length > 0 && (
            <Box
              pos={"absolute"}
              maxH={"20rem"}
              textAlign={"center"}
              overflow={"scroll"}
              border={"1px solid"}
              bg={"gray.100"}
              zIndex={1000}
              p={"0.5rem"}
              borderColor={" blackAlpha.200"}
            >
              {mapSearch?.map((el) => {
                return (
                  <Text fontSize={"0.9rem"} key={Math.random() * 100 + 4}>
                    {el.title}
                  </Text>
                );
              })}
            </Box>
          )}
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

export default memo(NavMain);
