import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

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
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalriceQuota,
    RentalPriceTotal,
} from './styles'


export function ShchedulingDetails(){
    const theme = useTheme();

    return (
        <Container>
            <Header>
                <BackButton 
                    onPress={() => {}}
                />
            </Header>

            <CardImage>
                <ImageSlider 
                    imagesUrl={['https://pictures.dealer.com/a/audibrooklynnyaoa/1927/20995e45b1f28b176b0fccb0309e9e7ax.jpg?impolicy=downsize&w=568']}
                />
            </CardImage>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>

                </Details>

                <Acessories>
                    <Accessory 
                        name="380Km/h"
                        icon={speedSvg}
                    />
                    <Accessory 
                        name="3.2s"
                        icon={accelerationSvg}
                    />
                    <Accessory 
                        name="800 HP"
                        icon={forceSvg}
                    />
                    <Accessory 
                        name="Gasolina"
                        icon={gasolineSvg}
                    />
                    <Accessory 
                        name="Auto"
                        icon={exchangeSvg}
                    />
                    <Accessory 
                        name="2 Pessoas"
                        icon={peopleSvg}
                    />
                </Acessories>

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather 
                            name="calendar"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>18/07/2021</DateValue>
                    </DateInfo>
                    
                    <Feather 
                        name="chevron-right"
                        size={RFValue(24)}
                        color={theme.colors.shape}
                    />

                    <DateInfo>
                        <DateTitle>ATE</DateTitle>
                        <DateValue>20/07/2021</DateValue>
                    </DateInfo>
                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>Total</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalriceQuota>R$ 580 x3 diárias</RentalriceQuota>
                        <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>

            </Content>

            <Footer>
                <Button 
                    title="Alugar agora"
                    color={theme.colors.success}
                />
            </Footer>

        </Container>
    );
}