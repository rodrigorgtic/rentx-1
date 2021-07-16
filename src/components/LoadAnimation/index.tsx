import React from 'react';

import LottieView from 'lottie-react-native';

import loadingCarAnimated from '../../assets/loadingCarAnimated.json';

import { Container } from './styles';

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        source={loadingCarAnimated}
        autoPlay
        style={{ height: 200 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
}
