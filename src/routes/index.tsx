import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './stack.routes';

interface Props{
    title: string;
}

export function Routes(){

    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    );
}