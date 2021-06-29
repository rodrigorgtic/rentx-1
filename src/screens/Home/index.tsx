import React from 'react';
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent
} from './styles'


export function Home(){
    const cars = [
        {
            brand: 'Audi',
            name: 'RS 5 Coupé',
            rent: {
                period: 'AO DIA',
                price: 340
            },
            thumbnail: 'https://pictures.dealer.com/a/audibrooklynnyaoa/1927/20995e45b1f28b176b0fccb0309e9e7ax.jpg?impolicy=downsize&w=568'
        },
        {
            brand: 'Porsche',
            name: 'Panamera',
            rent: {
                period: 'AO DIA',
                price: 130
            },
            thumbnail: 'https://images.dealer.com/ddc/vehicles/2019/Porsche/Panamera/Hatchback/perspective/front-left/2019_76.png'
        }
];

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

            <Car 
                data={cars[0]}
            />
            <Car 
                data={cars[1]}
            />
        </Container>
    );
}