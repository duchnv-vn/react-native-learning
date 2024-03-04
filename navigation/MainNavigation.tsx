import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TabTitlePropsType} from '../common/types/common.type';

type TabItem = {
  name: string;
  component: React.FC<any>;
};

type TabNavigation = {
  tabs: TabItem[];
  TitleComponent?: React.FC<TabTitlePropsType>;
};

const routesList = Object.values(Routes);

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

const noHeaderConfig = {header: () => null, headerShown: false};

const initialRouteName = Routes.Profile.name;

export const TabNavigation: React.FC<TabNavigation> = ({
  tabs,
  TitleComponent,
}) => {
  const renderTabItems = () => {
    return tabs.map(({name, component}, index) => {
      return (
        <Tab.Screen
          {...{name, component}}
          key={index}
          options={{
            ...(TitleComponent && {
              tabBarLabel: ({focused}) => (
                <TitleComponent {...{title: name, focused}} />
              ),
            }),
          }}
        />
      );
    });
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
