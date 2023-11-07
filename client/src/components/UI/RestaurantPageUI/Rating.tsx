import React from 'react';
import { Center, HStack } from '@chakra-ui/react';
import { FaRegStar } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { addRatingThunk } from '../../../features/redux/slices/oneRestaurantSlice/oneRestaurantThunk';

type RestaurantCardProps = {
  averageRating: number;
};

function Rating({ averageRating }: RestaurantCardProps): JSX.Element {
  const { id } = useParams();
  const idParam = Number(id);
  const dispatch = useAppDispatch();

  return (
    <Center>
      {averageRating && (
        <HStack gap={1}>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <FaRegStar
              key={uuidv4()}
                style={{
                  color: i < averageRating ? '#ffc107' : '#e4e5e9',
                }}
                onClick={() => dispatch(addRatingThunk({ id: idParam, rating: i + 1 }))}
                className="cursor-pointer text-xl"
              />
            ))}
        </HStack>
      )}
    </Center>
  );
}

export default React.memo(Rating);
