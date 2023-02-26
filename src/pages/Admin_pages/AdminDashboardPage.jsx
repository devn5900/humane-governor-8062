import { Box, HStack, Stack, Text } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "../../components/Admin_components/AdminNavbar";
import {
  getAssecccoriesData,
  getMenData,
  getWomenData,
} from "../../Redux/Admin/Admin.action";

const AdminDashboardPage = () => {
  const dispatch = useDispatch();
  const {mens_Data,women_Data,accessories_Data}= useSelector((store)=>store.admin)
  
  useEffect(() => {
    dispatch(getMenData());
    dispatch(getWomenData());
    dispatch(getAssecccoriesData());
  }, []);
  // console.log("Men",mens_Data , "Women",women_Data , "Ass",accessories_Data)
  const M = mens_Data.length;
  const W = women_Data.length;
  const A = accessories_Data.length;

  return (
    <Box display="flex" w={"100%"} gap={0}>
      <Box width="20%">
        <AdminNavbar />
      </Box>
      <Stack
        width={["100%","100%" ,"100%" , "80%"]}
        marginTop={"60px"}
        marginLeft={"-30px"}
        pt={30}
        fontFamily={"sans-serif"}
        border="0px solid black"
      >
        <Stack
          bg={"white"}
          textAlign="center"
          padding="10px 0px"
          borderRadius={5}
          boxShadow={"base"}
          w="100%"
        >
          <Text fontSize={["18px" ,"20px","25px" ]} fontFamily={"sans-serif"} >
            Total Products : {M + W + A}
          </Text>
        </Stack>
        <Box borderRadius={15} mt={10}>
          <Chart
            type="radialBar"
            height={450}
            series={[M, W, A]}
            options={{
              noData: { text: "Unavailable" },
              stroke: {
                lineCap: "round",
              },
              radialBar: {
                 dataLabels: {
                total: {
                  show: true,
                  label: "TOTAL",
                },
                 }
              },
              labels: [
                "MEN-PRODUCTS",
                "WOMEN-PRODUCTS",
                "ACCESSORIES-PRODUCTS",
              ],
            }}
          ></Chart>
        </Box>
        <HStack
          justifyContent={"center"}
          mt={10}
          pb={10}
          alignItems={"center"}
          spacing={3}
          display="flex"
          flexWrap="wrap"
          gap={7}
        >
          <Stack
            bg={"#00E396"}
            boxShadow={"base"}
            padding={8}
            borderRadius={15}
          >
            <Text fontWeight={"normal"} fontFamily={"sans-serif"}>
              {" "}
              Total Women Products <b>{W}</b>
            </Text>
          </Stack>
          <Stack
            bg={"#FEB019"}
            padding={8}
            boxShadow={"base"}
            borderRadius={15}
          >
            <Text fontWeight={"normal"} fontFamily={"sans-serif"}>
              Total Accessories Products <b>{A}</b>
            </Text>
          </Stack>
          <Stack
            bg={"#008FFB"}
            padding={8}
            boxShadow={"base"}
            borderRadius={15}
          >
            <Text fontWeight={"normal"} fontFamily={"sans-serif"}>
              Total Mens Products<b>{M}</b>
            </Text>
          </Stack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default AdminDashboardPage;
