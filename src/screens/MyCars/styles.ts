import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View``;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(325)}px;

    background-color: ${ ({ theme }) => theme.colors.header };

    justify-content: center;
    padding: ${RFValue(25)}px;

    padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
    color: ${ ({ theme }) => theme.colors.shape };
    font-family: ${ ({ theme }) => theme.fonts.secindary_600 };
    font-size: ${RFValue(30)}px;

    margin-top: 24px;
`;

export const SubTitle = styled.Text`
    color: ${ ({ theme }) => theme.colors.shape };
    font-family: ${ ({ theme }) => theme.fonts.secondary_400 };
    font-size: ${RFValue(15)}px;

    margin-top: 24px;
`;