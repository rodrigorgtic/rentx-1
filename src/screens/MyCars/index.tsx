import React, { useEffect, useState } from 'react';
import { CarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components';


import {
    Container,
    Header,
    SubTitle,
    Title
} from './styles';

interface Props{
    title: string;
}

export function MyCars({ title } : Props){
    const [ cars, setCars ] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }

    useEffect(() => {
        async function fetchCars(){
            try {
                const response = await api.get('/schedules_byuser?user_id=1');
                
                setCars(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    return (
        <Container>
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

                <SubTitle>
                    Conforto, segurança e praticidade.
                </SubTitle>

            </Header>
        </Container>
    );
}