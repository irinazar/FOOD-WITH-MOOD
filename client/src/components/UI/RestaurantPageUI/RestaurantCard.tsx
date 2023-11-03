import React from 'react';
import { Button, Card, CardBody, Center, Divider, Heading, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react';
import style from './style.module.css'
import Rating from './Rating';
import BookingModal from './BookingModal';

function OverlayTwo(): any {
  return (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  );
}

export default function RestaurantCard(): JSX.Element {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayTwo />)
  return (
    <Center>
    <Card className={style.restCard}>
      <CardBody>
        <Stack mt="1" spacing="3">
          <Heading size="md" className={style.restName}>
            Дарбарс
          </Heading>

          <Rating />
          <Text fontSize="m" className={style.textGray}>
            Адрес: пр. Мира 79, м. Сухаревская
          </Text>
          <Text fontSize="m" className={style.textGray}>
            Контакты : +7 (495) 930-23-65
          </Text>
          <Text>
            Cетевой индийский ресторан на проспекте Мира. Большое меню «Дарбарса» состоит из
            аутентичных блюд юга и севера Индии, более 50 позиций в нем — вегетарианские. Основными
            ингредиентами являются креветки, курица, мясо ягненка, баранина, овощи, травы, орехи и
            специи. Есть разделы с блюдами из тандура, с карри, с рисом. На отдельную страницу
            вынесены позиции южно-индийского региона: блины с овощами и мясом, пирожки, лепешки. По
            будням предлагают меню бизнес-ланчей, можно выбрать вегетарианский вариант. Интерьер
            современный, с восточными элементами в виде индийских картин и резных украшений из
            дерева на стенах и окнах.
          </Text>
        </Stack>
      </CardBody>
      <Button className={style.btn} colorScheme='blackAlpha' variant='outline' _hover={{ bg: 'rgba(196, 77, 86, 0.6)' }} onClick={() => {
          setOverlay(<OverlayTwo />)
          onOpen()
        }}>Забронировать</Button>
         <BookingModal isOpen={isOpen} onClose={onClose} overlay={overlay}/>
      <Divider />
    </Card>
    </Center>
  );
}
