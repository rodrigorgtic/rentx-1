import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Car, CarProps } from '../../components';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList
} from './styles'


export function Home(){
    const [ cars, setCars ] = useState<CarDTO[]>([] as CarDTO[]);
    const [ loading, setLoading ] = useState(true);
    const navigation = useNavigation();

    const carData: CarProps = {
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
    };

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars');
                setCars(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCars();
    }, []);

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
                data={cars}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Car 
                        data={item}
                        onPress={handleCarDetails}
                    />
                )}
            />
        </Container>
    );
}