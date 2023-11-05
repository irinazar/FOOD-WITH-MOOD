import React from 'react';
import { Center, HStack } from '@chakra-ui/react';
import { FaRegStar } from 'react-icons/fa';
import type OneRestaurantType from '../../../types/oneRestaurantType/oneRestaurantTypes';

type RestaurantCardProps = {
  oneRestaurant: OneRestaurantType;
};

export default function Rating({ oneRestaurant }: RestaurantCardProps): JSX.Element {
  const rating = oneRestaurant.averageRating;
  return (
    <Center>
      {rating && (
        <HStack gap={1}>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <FaRegStar
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                style={{
                  color: i < rating ? '#ffc107' : '#e4e5e9',
                }}
                // onClick={() => ratingHandler(i + 1)}
                className="cursor-pointer text-xl"
              />
            ))}
        </HStack>
      )}
    </Center>
  );
}
