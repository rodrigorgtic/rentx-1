import React from 'react';

import {
    BackButton,
    ImageSlider
} from '../../components';

import {
    Container,
    Header,
    CardImage
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

        </Container>
    );
}