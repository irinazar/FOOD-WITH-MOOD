import React from 'react';
import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react';
import PendingCard from '../../UI/AdminUI/PendingCard';

export default function AdminPage(): JSX.Element {
  const rests = [
    { id: 1, title: 'Каса Агава', address: 'Большой Черкасский пер., 17', contact:'+7 926 569-33-83', description:'В ресторане Casa Agave атмосфера латиноамериканского праздника и великолепная кухня соединяются воедино, а необычная подача придает блюдам нотку экзотики. '},
    { id: 2, title: 'Baba Marta', address: 'ул. Бахрушина, 3/12', contact: '+7 985 123-45-67', description: 'Baba Marta - это уютный болгарский ресторан, где вы можете насладиться богатым выбором болгарских блюд и вин. Мы гордимся нашими традиционными рецептами и гостеприимной атмосферой.' },
{ id: 3, title: 'Trattoria La Scarpetta', address: 'ул. Лесная, 5', contact: '+7 987 654-32-10', description: 'Trattoria La Scarpetta - это итальянский ресторан, где вы можете насладиться аутентичной итальянской кухней. Мы специализируемся на пастах, пицце и свежих морепродуктах.' }
  ];
  return (
    <div className="flex flex-col w-full">
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter  bg='gray.100' px="4" fontSize="xl" fontWeight="bold">
          Заявки, ожидающие подтверждения
        </AbsoluteCenter>
      </Box>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-3 mt-4 mb-5 mx-auto">
        {rests.map((el) => (
          <PendingCard key={el.id} rest={el}/>
        ))}
      </div>
    </div>
  );
}
