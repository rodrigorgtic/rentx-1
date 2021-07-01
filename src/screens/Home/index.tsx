import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car, CarProps } from '../../components';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList
} from './styles'


export function Home(){
    const navigation =useNavigation();

    const cars: CarProps = {
            brand: 'Audi',
            name: 'RS 5 Coupé',
            rent: {
                period: 'AO DIA',
                price: 340
            },
            thumbnail: 'https://pictures.dealer.com/a/audibrooklynnyaoa/1927/20995e45b1f28b176b0fccb0309e9e7ax.jpg?impolicy=downsize&w=568'
    };

    function handleCarDetails(){
        navigation.navigate('CarDetails');
    }

    return (
        <Container>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo 
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />

                    <TotalCars>
                        Total 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>

            <CarList 
                data={[1, 2, 3, 4, 5, 6, 7]}
                keyExtractor={item => String(item)}
                renderItem={({ item }) => (
                    <Car 
                        data={cars}
                        onPress={handleCarDetails}
                    />
                )}
            />
        </Container>
    );
}