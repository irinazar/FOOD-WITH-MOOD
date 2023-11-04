import React from 'react';
import { Box, Center, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import style from './style.module.css';
import type OneRestaurantType from '../../../types/oneRestaurantType/oneRestaurantTypes';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

type CarouselProps = {
  oneRestaurant: OneRestaurantType;
};

export default function Carousel({ oneRestaurant }: CarouselProps): JSX.Element {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });
  const cards = oneRestaurant.img.split(',');
  // console.log(cards, 'CAAAAAAAAARDS');

  return (
    <Center>
      <Box
        className={style.shadow}
        position="relative"
        height="600px"
        width="80%"
        overflow="hidden"
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          className={style.arrow}
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          className={style.arrow}
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
        <Slider
          dots={settings.dots}
          arrows={settings.arrows}
          fade={settings.fade}
          infinite={settings.infinite}
          autoplay={settings.autoplay}
          speed={settings.speed}
          autoplaySpeed={settings.autoplaySpeed}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
          ref={(sliderRef) => setSlider(sliderRef)}
        >
          {cards.map((img: string) => (
            <Box
              key={img}
              height="6xl"
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={img.includes('http') ? img : `../../img/${img}`}
            />
          ))}
        </Slider>
      </Box>
    </Center>
  );
}
