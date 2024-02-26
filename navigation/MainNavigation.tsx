import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';

const Stack = createStackNavigator();

const MainNavigation: React.FC = () => {
  const initialRouteName = Routes.Home.name;

  const renderScreens = () => {
    return Object.values(Routes).map(({name, component}, index) => {
      return <Stack.Screen {...{name, component}} key={index} />;
    });
  };

  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={initialRouteName}>
      {renderScreens()}
    </Stack.Navigator>
  );
};

export default MainNavigation;
