import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { useAuth } from '../../hooks/auth';

import { BackButton, Input, InputPassword } from '../../components';

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  Options,
  Option,
  OptionTitle,
  Section,
} from './styles';

type OptionType = 'dataEdit' | 'passwordEdit';

export function Profile() {
  const [option, setOption] = useState<OptionType>('dataEdit');

  const theme = useTheme();
  const { shape } = theme.colors;
  const { user } = useAuth();
  const navigaton = useNavigation();

  function handleBack() {
    navigaton.goBack();
  }

  function handleSingOut(): void {}

  function handleOptionChange(optionSelected: OptionType) {
    setOption(optionSelected);
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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

          <Content style={{ marginBottom: useBottomTabBarHeight() }}>
            <Options>
              <Option
                active={option === 'dataEdit'}
                onPress={() => handleOptionChange('dataEdit')}
              >
                <OptionTitle active={option === 'dataEdit'}>Dados</OptionTitle>
              </Option>
              <Option
                active={option === 'passwordEdit'}
                onPress={() => handleOptionChange('passwordEdit')}
              >
                <OptionTitle active={option === 'passwordEdit'}>
                  Trocar Senha
                </OptionTitle>
              </Option>
            </Options>
            {option === 'dataEdit' ? (
              <Section>
                <Input
                  iconName="user"
                  placeholder="Nome"
                  autoCorrect={false}
                  defaultValue={user.name}
                />
                <Input
                  iconName="mail"
                  editable={false}
                  defaultValue={user.email}
                />
                <Input
                  iconName="credit-card"
                  placeholder="CNH"
                  keyboardType="numeric"
                  defaultValue={user.driver_license}
                />
              </Section>
            ) : (
              <Section>
                <InputPassword iconName="lock" placeholder="Senha atual" />
                <InputPassword iconName="lock" placeholder="Nova Senha" />
                <InputPassword iconName="lock" placeholder="Repetir senha" />
              </Section>
            )}
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
