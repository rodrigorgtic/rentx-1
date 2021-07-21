import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { BackButton, Bullet } from '../../../components';

import {
  Container,
  Header,
  Steps,
  Title,
  Subtitle,
  Form,
  FormTitle,
} from './styles';

export function SingUṕFirstStep() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
        <Steps>
          <Bullet active />
          <Bullet />
        </Steps>
      </Header>
      <Title>
        Crie sua {'\n'}
        conta
      </Title>
      <Subtitle>
        Faça seu cadastro de {'\n'}
        forma rápida e fácil
      </Subtitle>
      <Form>
        <FormTitle>1. Dados</FormTitle>
      </Form>
    </Container>
  );
}
