import { Box, Card, ListItem, Text, UnorderedList } from '@twilio-paste/core';

export default function UserInfo(props) {
  const { task } = props;
  console.log(task);

  return (
    <Box marginY="space20" marginX="space20">
      <Card padding="space40">
        <Box>
          <Text as="p">Dados do usuário:</Text>
          <UnorderedList>
            <ListItem>Nome: {task?.attributes?.customerName}</ListItem>
            <ListItem>Email: {task?.attributes?.customerAddress}</ListItem>
            <ListItem>CPF: {task?.attributes?.cpf}</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Text as="p">Problemas:</Text>
          <UnorderedList>
            <ListItem>Depósito: {task?.attributes?.depositoproblem}</ListItem>
            <ListItem>Método de depósito: {task?.attributes?.paybrokers ? 'Paybrokers' : 'Zrobank'}</ListItem>
          </UnorderedList>
        </Box>
      </Card>
    </Box>
  );
}
