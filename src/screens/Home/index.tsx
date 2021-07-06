import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Car, Load } from '../../components';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList,
    MyCarsButton
} from './styles'


export function Home(){
    const [ cars, setCars ] = useState<CarDTO[]>([] as CarDTO[]);
    const [ loading, setLoading ] = useState(true);
    
    const navigation = useNavigation();
    const theme = useTheme(); 

    function handleCarDetails(car: CarDTO){
        navigation.navigate('CarDetails', { car });
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
                        Total { cars.length } carros
                    </TotalCars>
                </HeaderContent>
            </Header>
            {
                loading
                ?   <Load />

                :   <CarList 
                        data={cars}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Car 
                                data={item}
                                onPress={() => handleCarDetails(item)}
                            />
                        )}
                    />
            }

            <MyCarsButton>
                <Ionicons 
                    name="ios-car-sport"
                    size={32}
                    color={theme.colors.shape}
                />
            </MyCarsButton>

        </Container>
    );
}