import { Card, Heading, Text } from '@twilio-paste/core';
import { ITask } from '@twilio/flex-ui';

export interface OwnProps {
  task: ITask;
}

export default function UserInfo() {
  return (
    <Card>
      <Heading as="h3" variant="heading30">
        Dados do usuário
      </Heading>
      <Text as="p">Nome: João da Silva</Text>
      <Text as="p">Email: joao.silva@example.com</Text>
      <Text as="p">Telefone: (11) 99999-9999</Text>
    </Card>
  );
}
