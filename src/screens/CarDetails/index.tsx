import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
    BackButton,
    ImageSlider,
    Accessory,
    Button
} from '../../components';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
    Container,
    Header,
    CardImage,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Acessories,
    Footer
} from './styles'
import { CarDTO } from '../../dtos/CarDTO';


interface Params{
    car: CarDTO;
}


export function CarDetails(){
    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Params;

    function handleConfirmRental(){
        navigation.navigate('Scheduling');
    }

    function handleGoBack(){
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <BackButton 
                    onPress={handleGoBack}
                />
            </Header>

            <CardImage>
                <ImageSlider 
                    imagesUrl={car.photos}
                />
            </CardImage>

            <Content>
                <Details>
                    <Description>
                        <Brand> { car.brand } </Brand>
                        <Name> { car.name } </Name>
                    </Description>

                    <Rent>
                        <Period> { car.rent.period } </Period>
                        <Price>R$ {car.rent.price} </Price>
                    </Rent>

                </Details>

                <Acessories>
                    {
                        car.accessories.map(accessory => (
                            <Accessory
                                key={accessory.type} 
                                name={`${accessory.name}`}
                                icon={speedSvg}
                            />
                        ))
                    }
                </Acessories>

                <About>{ car.about }</About>
            </Content>

            <Footer>
                <Button 
                    title="Escolher período do Aluguel"
                    onPress={handleConfirmRental}
                />
            </Footer>

        </Container>
    );
}