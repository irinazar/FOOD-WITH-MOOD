import React from 'react';
import { Box, Center, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import style from './style.module.css';
import type { PictureType } from '../../../types/oneRestaurantType/oneRestaurantTypes';

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
  pictures: PictureType[];
};

export default function Carousel({ pictures }: CarouselProps): JSX.Element {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

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
          {pictures?.map((picture: PictureType) => (
            <Box
              key={picture.restaurantId}
              height="6xl"
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                picture.image.includes('http') ? picture.image : `../../../public/img/restaurants/${picture.image}`
              }
            />
          ))}
        </Slider>
      </Box>
    </Center>
  );
}
