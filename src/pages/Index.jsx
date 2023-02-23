import React from "react";
import SliderCard from "../components/landingPage/SliderCard";
import { Box } from "@chakra-ui/react";
import OfferImage from "../components/landingPage/OfferImage";
import DealsLink from "../components/landingPage/DealsLink";
import Disgns from "../components/landingPage/Disgns";
import CatCard from "../components/landingPage/CatCard";
import {
  accessories,
  catToBag,
  collections,
  collections2,
  links,
  slider1,
  slider2,
} from "../components/landingPage/NavData";
import Collections from "../components/landingPage/Collections";

const Index = () => {
  return (
    <Box overflow={"hidden"}>
      <Box pb={"2rem"}>
        <SliderCard data={slider1} />
      </Box>
      <Box pb={"2rem"}>
        <OfferImage
          image={
            "https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669115141.jpg"
          }
        />
      </Box>
      <Box pb={"2rem"}>
        <DealsLink />
      </Box>
      <Box pb={"2rem"}>
        <Disgns />
      </Box>
      <Box pb={"2rem"}>
        <CatCard title={"  TRENDING CATEGORIES"} links={links} />
      </Box>
      <Box pb={"2rem"}>
        <Collections title={"  TOO HOT TO BE MISSED"} coll={collections} />
      </Box>
      <Box pb={"2rem"}>
        <CatCard title={"  CATEGORIES TO BAG"} links={catToBag} />
      </Box>
      <Box pb={"2rem"}>
        <SliderCard data={slider2} />
      </Box>
      <Box pb={"2rem"}>
        <OfferImage
          image={
            "https://images.bewakoof.com/uploads/grid/app/desktop-survey-1673330211.jpg"
          }
        />
      </Box>
      <Box pb={"2rem"}>
        <CatCard title={"TOP ACCESSORIES"} links={accessories} />
      </Box>
      <Box pb={"2rem"}>
        <Collections title={"OUR BEST PICKS"} coll={collections2} />
      </Box>
      <Box pb={"2rem"}>
        <OfferImage
          image={
            "https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg"
          }
        />
      </Box>
      <Box pb={"2rem"}>
        <OfferImage
          image={
            "https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"
          }
        />
      </Box>
    </Box>
  );
};

export default Index;
