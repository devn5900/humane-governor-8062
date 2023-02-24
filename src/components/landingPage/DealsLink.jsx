import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const DealsLink = () => {
  const links = [
    {
      title: "Bestsellers",
      image:
        "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-bestsellers-1676881692.jpg",
    },
    {
      title: "New Arrivals",
      image:
        "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-new-arrivals-1674817171.jpg",
    },
    {
      title: "Hot Deals",
      image:
        "https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg",
    },
    {
      title: "Official Collaborations",
      image:
        "https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Common-1668508338.jpg",
    },
    {
      title: "Vote for Designs",
      image:
        "https://images.bewakoof.com/uploads/grid/app/vote-thumbnail-1668508339.jpg",
    },
    {
      title: "Last Sizes Left",
      image:
        "https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg",
    },
    {
      title: "Plus Size",
      image:
        "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-copy-1669723278.jpg",
    },
    {
      title: "Customization",
      image:
        "https://images.bewakoof.com/uploads/grid/app/me-shirt-thumbnail-1668508337.jpg",
    },
  ];

  return (
    <Box w={"85%"} m={"auto"}>
      <Flex gap={"1rem"}>
        {links?.map((el) => {
          return (
            <Box textAlign={"center"} key={Math.random() * 100 + 6}>
              <Image src={el.image} />
              <Text fontWeight={"bold"} fontSize={"sm"}>
                {el.title}
              </Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default DealsLink;
