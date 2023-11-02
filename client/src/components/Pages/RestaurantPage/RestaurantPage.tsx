import React from 'react'
import { Box } from '@chakra-ui/react'

import Carousel from '../../UI/RestaurantPageUI/Carousel'
import RestaurantCard from '../../UI/RestaurantPageUI/RestaurantCard'
import CommentSection from '../../UI/RestaurantPageUI/CommentSection'

export default function RestaurantPage(): JSX.Element {
  return (
    <Box w='100%' p={4} color='black'>
      <Carousel/>
      <RestaurantCard/>
      <CommentSection/>
    </Box>
  )
}
