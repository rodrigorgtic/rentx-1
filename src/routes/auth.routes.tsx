import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import {
  Confirmation,
  Splash,
  SingIn,
  SingUpFirstStep,
  SingUpSecondStep,
} from '../screens';

const { Navigator, Screen } = createTabM;

export function AuthRoutes() {
  return (
    <Navigator headerMode="none" initialRouteName="SingIn">
      <Screen name="Splash" component={Splash} />
      <Screen name="SingIn" component={SingIn} />
      <Screen name="SingUpFirstStep" component={SingUpFirstStep} />
      <Screen name="SingUpSecondStep" component={SingUpSecondStep} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
