import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import {createDrawerNavigator} from '@react-navigation/drawer';

const routesList = Object.values(Routes);

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const noHeaderConfig = {header: () => null, headerShown: false};

const initialRouteName = Routes.Profile.name;

export const MainMenuNagivation: React.FC = () => {
  const renderDrawerScreen = () => {
    return routesList.map(({name, component}, index) => {
      return <Drawer.Screen {...{name, component}} key={index} />;
    });
  };

  return (
    <Drawer.Navigator
      screenOptions={{...noHeaderConfig}}
      initialRouteName={initialRouteName}>
      {renderDrawerScreen()}
    </Drawer.Navigator>
  );
};

export const MainNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{...noHeaderConfig}}
      initialRouteName={initialRouteName}>
      <Stack.Screen name={'Drawer'} component={MainMenuNagivation} />
    </Stack.Navigator>
  );
};
