import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import GasolineSvg from '../../assets/gasoline.svg';

import {
    Container,
    Details,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Type,
    CardImage
} from './styles'

interface RentProps{
    period: string;
    price: number;
}

export interface CarProps{
    brand: string;
    name: string;
    rent: RentProps;
    thumbnail: string;
}

interface Props extends RectButtonProps{
    data: CarProps;
}

export function Car({ data, ...rest } : Props){

    return (
        <Container {...rest} >
            <Details>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>

                <About>
                    <Rent>
                        <Period>{data.rent.period}</Period>
                        <Price>{`R$ ${data.rent.price}`}</Price>
                    </Rent>
                    <Type>
                        <GasolineSvg />
                    </Type>
                </About>
            </Details>

            <CardImage 
                source={{ uri: data.thumbnail }}
                resizeMode="contain"
            />

        </Container>
    );
}