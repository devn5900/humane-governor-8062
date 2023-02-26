import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
import {Link} from "react-router-dom";

export default function AccessCard({name,description,image,id,brand,price,discount,rating,category}) {
  const [liked, setLiked] = useState(false);

  return (
    <Center py={3}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'400px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={image}
            roundedTop={'sm'}
            objectFit='fill'
            h="full"
            w='full'
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box
            bg="black"
            display={'inline-block'}
            px={2}
            py={1}
            color="white"
            mb={2}>
              <Text fontSize={'xs'} fontWeight="medium">
                {brand}
              </Text>
          </Box>
          <Text fontSize={'md'} fontWeight="medium">
              {category}
          </Text>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            {name}
          </Heading>
          <Text color={'gray.500'} noOfLines={2}>
            {description}
          </Text>
          <Flex justifyContent={'space-between'}>
            <Text fontWeight={'semibold'} fontSize={'lg'} color={'black'} noOfLines={1}>
                Price : ₹{price}
            </Text>
            <Text fontSize={'lg'} color={'green'} noOfLines={1}>
               {discount ? `offer : ${discount}` : null}
            </Text>
          </Flex>
          <Text fontWeight={'semibold'} fontSize={'md'} color={'black'} noOfLines={1}>Rating {rating}</Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Link to={`/product/${id}/details`}><Text fontSize={'md'} fontWeight={'semibold'}>
              View more
            </Text></Link>
            <Link to={`/product/${id}/details`}><BsArrowUpRight /></Link>
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            onClick={() => setLiked(!liked)}>
            {liked ? (
              <BsHeartFill fill="red" fontSize={'24px'} />
            ) : (
              <BsHeart fontSize={'24px'} />
            )}
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
}