import React, { useState } from 'react';
import { Avatar, Box, Button, Divider, Flex, Text, Textarea } from '@chakra-ui/react';
import style from '../../UserAccount/style.module.css';

function Comment(): JSX.Element {
  const [isReplyFormOpen, setIsReplyFormOpen] = useState(false);

  const toggleReplyForm = (): void => {
    setIsReplyFormOpen(!isReplyFormOpen);
  };
  return (
    <Box
      className={style['comment-container']}
      p="4"
      border="1px"
      borderColor="gray.200"
      rounded="md"
      shadow="sm"
      mb="4"
    >
      <Flex align="center" justify="space-between">
        <Flex className={style['user-comment-container']} align="center">
          <Avatar size="sm" ml="0" />
          <Text fontWeight="bold" fontSize="sm" ml="4">
            {' '}
            Имя
          </Text>
          <Text color="gray.500" fontSize="sm" ml="4">
            {' '}
            Дата
          </Text>
        </Flex>
        <Text fontSize="sm" fontWeight="bold">
          Ресторан
        </Text>
      </Flex>
      <Text mt="2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat facere quasi
        architecto vitae, eum facilis fuga? Voluptatibus consequuntur expedita cupiditate voluptatem
        quam! Unde animi excepturi a molestiae eligendi omnis?
      </Text>
      <Button
        className={style.btn}
        size="sm"
        mt="2"
        colorScheme="blackAlpha"
        variant="outline"
        onClick={toggleReplyForm}
      >
        Ответить
      </Button>
      {isReplyFormOpen && (
        <Box mt="2">
          <Textarea colorScheme="blackAlpha" placeholder="Ваш ответ" />
          <Button size="sm" mt="2" colorScheme="blackAlpha" variant="outline" className={style.btn}>
            Отправить
          </Button>
        </Box>
      )}
      <Divider mt="3" />
    </Box>
  );
}
export default React.memo(Comment);
