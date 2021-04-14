import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import QLNV from './components/QLNV';
import CTNV from './components/CTNV';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './components/Main';
import QLSP from './components/QLSP';
import QLSP from './components/QLPN';
const AppNavigator = createStackNavigator(
  {SignIn,SignUp,Main,QLNV,Profile,QLSP,CTNV},
  { headerMode: 'none' }
);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}