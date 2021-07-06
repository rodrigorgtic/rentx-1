import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import {
    BackButton,
    Button,
    Calendar,
    DayProps,
    generateInterval,
    MarkedDateProps
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
    const [ lastSelectedDate, setLastSelectedDate ] = useState<DayProps>({} as DayProps);
    const [ markedDates, setMarkedDates ] = useState<MarkedDateProps>({} as MarkedDateProps);
    const theme =  useTheme();
    const navigation = useNavigation();

    function handleConfirmRental(){
        navigation.navigate('SchedulingDetails');
    }

    function handleGoBack(){
        navigation.goBack();
    }

    function handleChangeDate(date: DayProps){
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if(start.timestamp > end.timestamp){
            start = end;
            end = start;
        }
        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);
    }

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
                    onPress={handleGoBack}
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
                <Calendar 
                    markedDate={markedDates}
                    onDayPress={handleChangeDate}
                />
            </Content>

            <Footer>
                <Button 
                    title="confirmar"
                    onPress={handleConfirmRental}
                />
            </Footer>

        </Container>
    );
}