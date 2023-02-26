import React, { useState, useEffect } from "react";
import MensProductCard from "../../components/Mens_components/MensProductCard";
import { getMensProducts } from "../../Redux/mens/mens.action";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Flex, Heading } from "@chakra-ui/react";
import { useLocation, useSearchParams } from "react-router-dom";
import MensFilterAndSort from "../../components/Mens_components/MensFilterAndSort";
import Pagination from "../../components/Pagination";

const Menspage = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.MensReducer.data);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (newPageNumber) => {
    setActivePage(newPageNumber);
  };

  useEffect(() => {
    if (products.length === 0 || location) {
      const getMensProductsParam = {
        params: {
          category: searchParams.getAll("filter"),
        },
      };
      dispatch(getMensProducts(getMensProductsParam));
    }
  }, [location.search]);

  console.log(products);

  return (
    <>
      <Heading mr={"50%"} fontSize={"24px"}>
        TotalProducts({products.length})
      </Heading>
      <Box display={"flex"} gap={"20px"} width={"100%"} overflow={"hidden"}>
        <Box maxW={"30%"} borderRight={"1.5px solid gray"}>
          <MensFilterAndSort />
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
                return <MensProductCard key={item.id} {...item} />;
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

export default Menspage;
