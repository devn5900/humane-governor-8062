import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";

export default function SliderCard({ data }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box overflow={"hidden"}>
      <div>
        <Slider {...settings}>
          {data?.map((el) => {
            return (
              <div key={Math.random() * 100 + 5}>
                <Box pl={"0.3rem"}>
                  <Image src={el.image} />
                </Box>
              </div>
            );
          })}
        </Slider>
      </div>
    </Box>
  );
}
