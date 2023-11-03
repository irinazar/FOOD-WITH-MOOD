import React from 'react'
import {  Center, HStack } from '@chakra-ui/react';
import { FaRegStar } from 'react-icons/fa';

export default function Rating(): JSX.Element {
  const ratingprop = 4;
  return (
    <Center>
    <HStack gap={1}>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <FaRegStar
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  style={{
                    color: i < ratingprop ? '#ffc107' : '#e4e5e9',
                  }}
                  // onClick={() => ratingHandler(i + 1)}
                  className="cursor-pointer text-xl"
                />
              ))}
          </HStack>
          </Center>
  )
}
