import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import Carousel from '../RestaurantPageUI/Carousel'

type BookingModalProps = {
  rest: {
    id: number;
    title: string;
    address:string;
    contact:string;
    description:string;
  }
};


export default function PendingCard({rest}:BookingModalProps): JSX.Element {
  return (
    <Card>
      <CardHeader textAlign="center">
        <Heading size='md'>{rest.title}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Carousel/>
          <Box textAlign="center">
            <Heading size='xs' textTransform='uppercase'>
              Адрес
            </Heading>
            <Text pt='2' fontSize='sm'>
              {rest.address}
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading size='xs' textTransform='uppercase'>
              Контакты
            </Heading>
            <Text pt='2' fontSize='sm'>
            {rest.contact}
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading size='xs' textTransform='uppercase'>
              Описание
            </Heading>
            <Text pt='2' fontSize='sm'>
            {rest.description} 
            </Text>
          </Box>
        </Stack>
      </CardBody>
      
      <CardFooter display="flex" justifyContent="center" alignItems="center">
        <ButtonGroup variant='outline' spacing='6'>
          <Button colorScheme='green'>Одобрить</Button>
          <Button colorScheme='orange'>Отклонить</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}