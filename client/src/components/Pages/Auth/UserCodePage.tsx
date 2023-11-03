import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { codeUserThunk } from '../../../features/redux/slices/user/UserThuncks';
import type { CreateConfirmType } from '../../../types/userType/userTypes';

export default function UserCodePage(): JSX.Element {
  const dispatch = useAppDispatch();

  const submitCodeHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));

    const createConfirmData: CreateConfirmType = {
      randomString: formData.randomString.toString(),
      // userId: formData.userId,
    };

    void dispatch(codeUserThunk(createConfirmData));
  };

  return (
    <div className="flex justify-center mt-5">
      <Box bg={useColorModeValue('', 'gray.900')} w="lg" p={8} borderRadius="md">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          align="center"
          mb={4}
          color={useColorModeValue('gray.900', 'gray.100')}
        >
          Код подтверждения
        </Text>
        <form onSubmit={submitCodeHandler}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel color={useColorModeValue('gray.900', 'gray.100')}>Код</FormLabel>
              <Input
                name="randomString"
                type="text"
                placeholder="code"
                bg={useColorModeValue('gray.100', 'gray.900')}
              />
            </FormControl>

            <Button type="submit" colorScheme="blue" w="full" mt={4}>
              Отправить
            </Button>
          </VStack>
        </form>
      </Box>
    </div>
  );
}
