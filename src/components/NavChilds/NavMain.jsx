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
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";
import boogylogo from "../../images/boogylogo.png";
import { Link as ReachLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import NavLinkChild from "./NavLinkChild";
import { searchSuggestions } from "../../utils/api";
import useThrottle from "../../hooks/useThrottle";
import { RiAdminLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { GET_LOGOUT_USER } from "../../Redux/Auth/actionType";
const NavMain = () => {
  const logUsr = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [mapSearch, setMapSearch] = useState([]);
  const query = useThrottle(search, 500);
  const [load, setLoad] = useState(false);

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
    let inp = e.target.value;
    if (inp !== search) {
      setSearch(inp);
    }
  };

  useEffect(() => {
    if (search === "") {
      setMapSearch([]);
      setSearch("");
    } else {
      setLoad(true);
      fetchSearch(query);
    }

    return () => {
      setMapSearch([]);
    };
  }, [query]);

  const fetchSearch = (query) => {
    searchSuggestions(query)
      .then((res) => {
        const val = res?.reduce((acc, el) => {
          let obj = {};
          obj.title = el.name.split(" ").splice(0, 5).join(" ");
          obj.id = el.id;
          obj.image = el.image;
          acc.push(obj);
          return acc;
        }, []);
        if (query === "") {
          setMapSearch([]);
        } else {
          setMapSearch(val);
        }
        setLoad(false);
      })
      .catch((e) => {
        setLoad(false);
      });
  };

  const logout = () => {
    dispatch({ type: GET_LOGOUT_USER });
  };

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
                children={load ? <Spinner /> : <BsSearch />}
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
          {mapSearch.length == 0 && search !== "" && (
            <Box
              pos={"absolute"}
              top={"2.7rem"}
              maxH={"20rem"}
              w={"15rem"}
              textAlign={"center"}
              border={"1px solid"}
              bg={"gray.200"}
              zIndex={1000}
              p={"0.5rem"}
              borderColor={" blackAlpha.200"}
            >
              <Box color={"blackAlpha.600"}>No Item Found !</Box>
            </Box>
          )}
          {mapSearch.length > 0 && (
            <Box
              pos={"absolute"}
              top={"2.7rem"}
              maxH={"20rem"}
              w={"18rem"}
              textAlign={"center"}
              overflow={"scroll"}
              border={"1px solid"}
              bg={"gray.200"}
              zIndex={1000}
              css={{
                "&::-webkit-scrollbar": {
                  width: "4px",
                },
                "&::-webkit-scrollbar-track": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#8ccef0",
                  borderRadius: "24px",
                },
              }}
              p={"0.5rem"}
              borderColor={" blackAlpha.200"}
            >
              <Box>
                {!load &&
                  mapSearch?.map((el) => {
                    return (
                      <Link
                        as={ReachLink}
                        key={Math.random() * 100 + 4}
                        to={`/product/${el.id}/details`}
                      >
                        <Flex
                          onClick={() => {
                            setMapSearch([]);
                            setSearch("");
                          }}
                          alignItems={"center"}
                          mt={"0.2rem"}
                          bg={"blackAlpha.50"}
                          _hover={{ bg: "#E3E9ED" }}
                          cursor={"pointer"}
                          borderRadius={"sm"}
                          overflow={"hidden"}
                        >
                          <Box w={"13%"}>
                            <Image src={el.image} w={"fit-content"} />
                          </Box>
                          <Box ml={"0.2rem"}>
                            <Text textAlign={"start"} fontSize={"0.9rem"}>
                              {el.title.trim()}
                            </Text>
                          </Box>
                        </Flex>
                      </Link>
                    );
                  })}
              </Box>
            </Box>
          )}
        </Box>

        <Flex gap="1rem" alignItems={"center"}>
          {!logUsr?.isLogged ? (
            <Link as={ReachLink} to={"/register"}>
              Account
            </Link>
          ) : (
            <Text onClick={logout}>{logUsr?.name}</Text>
          )}
          <Link as={ReachLink} to={"/admin-dashboard"}>
            <Box pos="relative">
              <Icon as={RiAdminLine} fontSize={"1.7rem"} />
            </Box>
          </Link>
          <Link as={ReachLink} to={"/cart"}>
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
                {logUsr.cartItem?.length || 0}
              </Badge>
            </Box>
          </Link>
          <Link as={ReachLink} to={"#"}>
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
