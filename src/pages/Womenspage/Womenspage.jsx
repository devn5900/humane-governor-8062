import React, { useState, useEffect } from "react";
import WomensProductCard from "../../components/Womens_components/WomensProductCard";
import { getWomensProducts } from "../../Redux/womens/womens.action";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Flex, Heading } from "@chakra-ui/react";
import { useLocation, useSearchParams } from "react-router-dom";
import WomensFilterAndSort from "../../components/Womens_components/WomensFilterAndSort";
import Pagination from "../../components/Pagination";

const Womenspage = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.WomensReducer.data);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (newPageNumber) => {
    setActivePage(newPageNumber);
  };

  useEffect(() => {
    if (products.length === 0 || location) {
      const getWomensProductsParam = {
        params: {
          category: searchParams.getAll("filter"),
        },
      };
      dispatch(getWomensProducts(getWomensProductsParam));
    }
  }, [location.search]);

//   console.log(products);

  return (
    <>
      <Heading mr={"50%"} fontSize={"24px"}>
        TotalProducts({products.length})
      </Heading>
      <Box display={"flex"} gap={"20px"} width={"100%"} overflow={"hidden"}>
        <Box maxW={"30%"} borderRight={"1.5px solid gray"}>
          <WomensFilterAndSort />
        </Box>

        <Grid
          justifyContent={"center"}
          templateColumns="repeat(3, 1fr)"
          maxW={"70%"}
          ml={"5%"}
        >
          {products.length > 0 &&
            products
              .filter((item, index) => {
                return (
                  index >= 11 * (activePage - 1) && index < 11 * activePage
                );
              })
              .map((item) => {
                return <WomensProductCard key={item.id} {...item} />;
              })}
        </Grid>
      </Box>
      <Flex justifyContent={"center"} p={6}>
        <Pagination
          productsLength={products?.length}
          perPage={11}
          activePage={activePage}
          handlePageChange={handlePageChange}
        />
      </Flex>
    </>
  );
};

export default Womenspage;
