import React from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { BackButton } from '../../components';

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
} from './styles';

export function Profile() {
  const theme = useTheme();
  const { shape } = theme.colors;
  const navigaton = useNavigation();

  function handleBack() {
    navigaton.goBack();
  }

  function handleSingOut(): void {}

  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton color={shape} onPress={handleBack} />
          <HeaderTitle>Editar Perfil</HeaderTitle>
          <LogoutButton onPress={handleSingOut}>
            <Feather name="power" size={24} color={shape} />
          </LogoutButton>
        </HeaderTop>

        <PhotoContainer>
          <Photo source={{ uri: 'https://github.com/jnunes-ds.png' }} />

          <PhotoButton onPress={() => {}}>
            <Feather name="camera" size={24} color={shape} />
          </PhotoButton>
        </PhotoContainer>
      </Header>
    </Container>
  );
}
