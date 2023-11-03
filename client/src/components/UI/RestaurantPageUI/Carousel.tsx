import React from 'react';
import { Box, Center, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import style from './style.module.css'

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

export default function Carousel(): JSX.Element {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://otdyhateli.com/wp-content/uploads/2020/01/ind_cuis.jpg',
    'https://p2.zoon.ru/preview/fK3gimifEGrvwHjeYiI9LQ/2000x1500x75/1/c/b/original_507d23423c72dd6b6c000015_5af9e66384d11.jpg',
    'https://gcdn.tomesto.ru/img/place/000/029/395/restoran-darbars-darbars-na-prospekte-mira_2859f_full-289006.JPG',
  ];

  return (
    <Center>
    <Box className={style.shadow} position="relative" height="600px" width="80%" overflow="hidden">
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
        colorScheme="messenger"
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
        colorScheme="messenger"
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
        {cards.map((url) => (
          <Box
            key={url}
            height="6xl"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
    </Center>
  );
}
