import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import {
  Home,
  CarDetails,
  Scheduling,
  SchedulingComplete,
  SchedulingDetails,
  MyCars,
  Splash,
  SingIn,
} from '../screens';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator headerMode="none" initialRouteName="SingIn">
      <Screen name="SingIn" component={SingIn} />
      <Screen
        name="Home"
        component={Home}
        options={{ gestureEnabled: false }}
      />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
