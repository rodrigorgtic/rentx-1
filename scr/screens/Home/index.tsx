import React from 'react';

import {
    Container,
    Title
} from './styles'

interface Props{
    title: string;
}

export function Home(){

    return (
        <Container>
            <Title> Home </Title>
        </Container>
    );
}