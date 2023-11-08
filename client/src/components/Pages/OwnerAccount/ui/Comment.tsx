import React, { useState } from 'react';
import { Box, Button, Divider, Flex, Text, Textarea } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import style from '../../UserAccount/style.module.css';
import type { CommentResponseType } from '../../../../types/lkTypes/lkTypes';
import useLkHooks from '../../../../hooks/lkHooks/useLkHooks';

type CommentProps = {
  comment: CommentResponseType;
};

function Comment({ comment }: CommentProps): JSX.Element {
  const { handlerReplySubmit } = useLkHooks();
  const { id } = useParams();
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
          <Text fontWeight="bold" fontSize="sm" ml="4">
            {comment.User.name}
          </Text>
          <Text color="gray.500" fontSize="sm" ml="4">
            {comment.createdAt.slice(0, 10)}
          </Text>
        </Flex>
        <Text fontSize="sm" fontWeight="bold">
          {comment?.Restaurant?.title}
        </Text>
      </Flex>
      <Text mt="2">{comment.body}</Text>
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
      <div className={style.containercomment}>
        <div>
          <strong>Ответ </strong>
        </div>
        {comment?.CommentReplies.map((reply) => (
          <div
            className={style.commentstylemy}
            key={reply.id}
            style={{ maxWidth: '400px', textAlign: 'right' }}
          >
            <strong>{reply.body}</strong>
          </div>
        ))}
      </div>
      {isReplyFormOpen && (
        <form onSubmit={(e) => handlerReplySubmit(e, comment.id, Number(id))}>
          <Box mt="2">
            <Textarea name="body" colorScheme="blackAlpha" placeholder="Ваш ответ" />
            <Button
              size="sm"
              mt="2"
              type="submit"
              colorScheme="blackAlpha"
              variant="outline"
              className={style.btn}
            >
              Отправить
            </Button>
          </Box>
        </form>
      )}
      <Divider mt="3" />
    </Box>
  );
}
export default React.memo(Comment);
