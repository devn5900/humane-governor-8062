import AccessCard from './AccessCard';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { accessRate, accessSort, getAccessoriesData } from '../../utils/api'
import {accessError, accessLoading, getAccessoriesProducts} from "../../Redux/Accessories/action"
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Input,
  Button,
  Stack,
  Center,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiMenu,
} from 'react-icons/fi';
import Loader from '../../components/Loader';
import { useState } from 'react';
import {accessSearch} from "../../utils/api";
import { Radio, RadioGroup } from '@chakra-ui/react'


const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
];

function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}


const SidebarContent = ({ onClose, ...rest }) => {
  const [query,setQuery] = useState("");
  // const [sort,setSort] = useState("");
  const dispatch = useDispatch()
  // const data = useSelector((store) => store.accessories.data)
  

  const handleSearch = () => {
    setTimeout(() => {
      dispatch(accessLoading())
      accessSearch(query)
      .then((res) => dispatch(getAccessoriesProducts(res.data)))
      .catch((e) => dispatch(accessError()))
    }, 1500);
  }
  // console.log(data)

  const handleSort = (val) => {
    dispatch(accessLoading())
    accessSort(val)
    .then((res) => dispatch(getAccessoriesProducts(res.data)))
    .catch((e) => dispatch(accessError()))
  }

  const handleRating = (val) => {
    dispatch(accessLoading())
    accessRate(val)
    .then((res) => dispatch(getAccessoriesProducts(res.data)))
    .catch((e) => dispatch(accessError()))
  }
  

  useEffect(() => {
    handleSearch()
    // handleSort()
    // handleRating()
  },[query])

  

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      // borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="absolute"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Input size={'md'} 
          placeholder='Search Accessories' 
          value={query} 
          onChange={(e) => {
            setQuery(e.target.value)
            handleSearch()
          }} >
        </Input>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {/* {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))} */}
      <Text mx={5} fontSize={'lg'} fontWeight={'semibold'}>Price</Text>
      <RadioGroup>
        <Stack spacing={5} direction='column' mx={4}>
          <Radio onClick={() => {
            // setSort("asc")
            handleSort("asc")
          }} colorScheme='green' value='1'>
            Low - High
          </Radio>
          <Radio  onClick={() => {
            // setSort("desc")
            handleSort("desc")
          }}
           colorScheme='red' value='2'>
            High - Low
          </Radio>
        </Stack>
      </RadioGroup>
      <br />
      <Text mx={5} fontSize={'lg'} fontWeight={'semibold'}>Rating</Text>
      <RadioGroup>
        <Stack spacing={4} direction='row' mx={2}>
          <Radio value='1' colorScheme='red' onClick={() => handleRating('desc')}>Highest</Radio>
          <Radio value='2' colorScheme='green' onClick={() => handleRating('asc')}>Lowest</Radio>    
        </Stack>
    </RadioGroup>
    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  return (
    // <Link href={`/accessories/products/${children}`} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="xl"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'yellow.300',
          color: 'black',
        }}
        {...rest}>
        {/* {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'black',
            }}
            as={icon}
          />
        )} */}
        {children}
      </Flex>
    // </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Input size={'sm'} placeholder='Search'></Input>
    </Flex>
  );
};


const AllAccessoriesProducts = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.accessories.data);
    const loading = useSelector((store) => store.accessories.isLoading);
    const error = useSelector((store) => store.accessories.isError);
    const [page,setPage] = useState(1);
    console.log(data);
    
    const getData = () => {
        dispatch(accessLoading())
        getAccessoriesData(page)
        .then((res) => dispatch(getAccessoriesProducts(res.data)))
        .catch((e) => dispatch(accessError()));
    }
    
    useEffect(() => {
        getData()
    },[page])
    

  return <Box>
    <Flex>
      <Box >
        <Sidebar/>
      </Box>
      <Box style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"auto",gap:"15px"}}>
        {loading ? <Loader/> : error ? <h1>Something is wrong...Please refresh</h1> : data?.map((e) => {
            return <AccessCard key={e.id} {...e}/>
        })}
        {/* hy */}
      </Box>
      
    </Flex>

     {/* Pagination */}

    <Center my={5}>
      <Button variant={'ghost'} isDisabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
      <Button variant={'ghost'} isDisabled>{page}</Button>
      <Button variant={'ghost'} onClick={() => setPage(page + 1)}>Next</Button>
    </Center>
    
  </Box>
}

export default AllAccessoriesProducts