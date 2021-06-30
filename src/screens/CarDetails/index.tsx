import React from 'react';

import {
    BackButton,
    ImageSlider
} from '../../components';

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
    About
} from './styles'


export function CarDetails(){

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

                <About>
                    Este é automóvel desportivo. Surgiu do
                    lendário touro de lide indultado na praça Real
                    Maestranza de Sevilla. É um belíssimo carro 
                    para quem gosta de acelerar.
                </About>

            </Content>

        </Container>
    );
}