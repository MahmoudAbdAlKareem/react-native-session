import React from 'react';
import ComponentsDemoRoutes from '../src/ComponentsDemo/Routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Routes = () => {
  return <ComponentsDemoRoutes />;
};

export default Routes;
