import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import {
  Home,
  CarDetails,
  Scheduling,
  Confirmation,
  SchedulingDetails,
  MyCars,
  Splash,
  SingIn,
  SingUpFirstStep,
  SingUpSecondStep,
} from '../screens';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator headerMode="none" initialRouteName="Home">
      <Screen name="SingIn" component={SingIn} />
      <Screen name="SingUpFirstStep" component={SingUpFirstStep} />
      <Screen name="SingUpSecondStep" component={SingUpSecondStep} />
      <Screen
        name="Home"
        component={Home}
        options={{ gestureEnabled: false }}
      />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
