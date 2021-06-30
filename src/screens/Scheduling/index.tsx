import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import {
    BackButton,
    Button
} from '../../components';

import ArrowSvg from '../../assets/arrow.svg';
import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,
} from './styles'

interface Props{}

export function Scheduling(){
    const theme =  useTheme();

    return (
        <Container>
            <StatusBar 
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <Header> 
                <BackButton
                    color={theme.colors.shape} 
                    onPress={() => {}}
                />

            <Title>
                Escolha uma {'\n'}
                data de início e {'\n'}
                fim do aluguel
            </Title>

            <RentalPeriod>
                <DateInfo>
                    <DateTitle>DE</DateTitle>
                    <DateValue selected={false}>
                        31/06/2021
                    </DateValue>
                </DateInfo>

                <ArrowSvg />

                <DateInfo>
                    <DateTitle>ATÉ</DateTitle>
                    <DateValue selected={false}>
                        31/06/2021
                    </DateValue>
                </DateInfo>
            </RentalPeriod>
            </Header>

            <Content>

            </Content>

            <Footer>
                <Button title="confirmar"/>
            </Footer>

        </Container>
    );
}