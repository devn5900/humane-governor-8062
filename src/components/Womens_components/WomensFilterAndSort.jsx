import {
    CheckboxGroup,
    Heading,
    Stack,
    Checkbox,
    Box,
    RadioGroup,
    Radio,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  import { useSearchParams } from "react-router-dom";
  import {
    getWomensProductSuccess,
    womensProductError,
    womensProductRequest,
  } from "../../Redux/womens/womens.action";
  
  import { useDispatch } from "react-redux";
  import { womensSort } from "../../utils/api";
  
  const WomensFilterAndSort = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialFiltervalues = searchParams.getAll("filter");
    const [filterValues, setFilterValues] = useState(initialFiltervalues || []);
    const dispatch = useDispatch();
  
    const handleFilterChange = (value) => {
      // console.log(value);
      setFilterValues(value);
    };
  
    useEffect(() => {
      let params = {};
      if (filterValues.length) params.filter = filterValues;
      setSearchParams(params);
    }, [filterValues, setSearchParams]);
  
    const handlePriceSort = (val) => {
      dispatch(womensProductRequest());
      womensSort(val)
        .then((res) => dispatch(getWomensProductSuccess(res.data))
        )
        .catch((e) => dispatch(womensProductError()));
    };
  
    const handleRatingSort = (val) => {
      dispatch(womensProductRequest());
      womensSort(val)
        .then((res) => dispatch(getWomensProductSuccess(res.data)))
        .catch((e) => dispatch(womensProductError()));
    };
  
    return (
      <Box p={6}>
        <Heading fontSize={"20px"}>Filter By Category</Heading>
        <CheckboxGroup
          colorScheme="green"
          value={filterValues}
          onChange={handleFilterChange}
        >
          <Stack spacing={[1, 2]} direction={["column"]} mt={4}>
            <Checkbox value="T-Shirt">T-shirt</Checkbox>
            <Checkbox value="Sweatshirt">Sweatshirt</Checkbox>
            <Checkbox value="Kurta">Kurta</Checkbox>
            <Checkbox value="Vest">Vest</Checkbox>
            <Checkbox value="Co-ordinates">Co-ordinates</Checkbox>
          </Stack>
        </CheckboxGroup>
  
        <Heading fontSize={"20px"} mt={4}>
          Sorts
        </Heading>
        <RadioGroup>
          <Stack direction="column" mt={4}>
            <Radio
              value="1"
              onClick={() => {
                handlePriceSort("desc");
              }}
            >
              High Price
            </Radio>
            <Radio
              value="2"
              onClick={() => {
                handlePriceSort("asc");
              }}
            >
              Low Price
            </Radio>
            <Radio
              value="3"
              onClick={() => {
                handleRatingSort("desc");
              }}
            >
              Highest Rating
            </Radio>
            <Radio
              value="4"
              onClick={() => {
                handleRatingSort("asc");
              }}
            >
              Lowest Rating
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
    );
  };
  
  export default WomensFilterAndSort;
  