import {
    Flex,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Text,
  } from "@chakra-ui/react";
  // import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from "react-icons/fi";
  
  const tag = "FOR TRIBE MEMBERS";
  
  function MensProductCard({ id, name, price, image, description, brand,rating }) {
    return (
    
      <Flex p={5} w="sm" gap={6} alignItems="center" justifyContent="center">
        <Box
        //    border={'1px solid red'}
          bg={useColorModeValue("white", "gray.800")}
          w='98%'
        //   w={'sm'}
          borderWidth="1px"
          borderTop={"0px"}
          rounded="md"
          shadow="md"
          position="relative"
        >
          <Image
            
            // objectFit={"contain"}
            src={image}
            w={"sm"}
            alt={`Picture of ${name}`}
            roundedTop="lg"
          />
           <Badge colorScheme="gray" mt={-20} mr={'100%'} >
                  {rating}⭐
            </Badge>
          <Box p="3">
            <Box alignItems="baseline" mt={-25}>
              <Badge
                rounded="full"
                //  px="2"
                fontSize="0.7em"
                colorScheme="gray"
                mr={"100%"}
                variant={"solid"}
                color={"black"}
              >
                {brand}
              </Badge>
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="lg"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}
              >
                <chakra.a href={"#"} display={"flex"}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                </chakra.a>
              </Tooltip>
            </Flex>
            <Box
              fontSize={"11px"}
              textAlign={"left"}
              fontWeight={"bold"}
              color={"gray.500"}
            >
              <Text>{description.slice(0, 50)}</Text>
            </Box>
            <Flex justifyContent="space-between" alignContent="center">
              {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
              <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
                <Box as="span" color={"gray.600"} fontSize="md">
                  ₹
                </Box>
                {`${price.toFixed(2)}`}{" "}
                <Badge colorScheme="red" mb={2} textDecoration={"line-through"}>
                  ₹1499
                </Badge>
              </Box>
            </Flex>
            <Badge
              variant="solid"
              mr={"100%"}
              color={"black"}
              fontSize={"11px"}
              fontWeight={"bold"}
              backgroundColor={"#E2E8F0"}
            >
              {`₹${price.toFixed(2)}`} {tag.toLowerCase()}
            </Badge>
          </Box>
        </Box>
      </Flex>
      
    );
  }
  
  export default MensProductCard;
  