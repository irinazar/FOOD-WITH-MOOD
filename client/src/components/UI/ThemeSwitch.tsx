import React from 'react';
import { Switch, useColorMode } from '@chakra-ui/react';

export default function ThemeSwitch(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="mr-5">
      <Switch
        colorScheme="teal"
        onChange={() => toggleColorMode()}
        isChecked={colorMode === 'light'}
      />
    </div>
  );
}
