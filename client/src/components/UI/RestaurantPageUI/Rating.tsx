import React from 'react';
import { Center, HStack } from '@chakra-ui/react';
import { FaRegStar } from 'react-icons/fa';

type RestaurantCardProps = {
  averageRating: number;
};

export default function Rating({ averageRating }: RestaurantCardProps): JSX.Element {

  return (
    <Center>
      {averageRating && (
        <HStack gap={1}>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <FaRegStar
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                style={{
                  color: i < averageRating ? '#ffc107' : '#e4e5e9',
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
