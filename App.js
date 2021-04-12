import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CaiDat from './components/CaiDat';
import DoiTac from './components/DoiTac';
import ChamCong from './components/ChamCong';
import QLNV from './components/QLNV';
import Profile from './components/Profile';
import QLHD from './components/QLHD';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './components/Main';
import ChangeNewPassword from './components/ChangeNewPassword';
import ForgotPassword from './components/FogotPassword';
import QLSP from './components/QLSP';
const AppNavigator = createStackNavigator(
  {SignIn,SignUp,CaiDat,ChamCong,DoiTac,Main,QLHD,QLNV,Profile,ChangeNewPassword,ForgotPassword,QLSP},
  { headerMode: 'none' }
);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}