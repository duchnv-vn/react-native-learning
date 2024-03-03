import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

type TabItem = {
  name: string;
  component: React.FC<any>;
};

const routesList = Object.values(Routes);

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

const noHeaderConfig = {header: () => null, headerShown: false};

const initialRouteName = Routes.Profile.name;

export const TabNavigation: React.FC<{tabs: TabItem[]}> = ({tabs}) => {
  const renderTabItems = () => {
    return tabs.map(({name, component}, index) => (
      <Tab.Screen {...{name, component}} key={index} />
    ));
  };

  return <Tab.Navigator>{renderTabItems()}</Tab.Navigator>;
};

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
