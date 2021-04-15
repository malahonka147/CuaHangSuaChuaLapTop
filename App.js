import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import QLNV from './components/QLNV';
import CTNV from './components/CTNV';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './components/Main';
import QLSP from './components/QLSP';
import QLPN from './components/QLPN';
import ThemPN from './components/ThemPN';
import ThemSP from './components/ThemSP';
import SuaNV from './components/SuaNV'
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
      
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false,}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false,}} />
        <Stack.Screen name="QLNV" component={QLNV} options={{headerShown: false,}} />
        <Stack.Screen name="CTNV" component={CTNV} options={{headerShown: false,}} />
        <Stack.Screen name="Main" component={Main} options={{headerShown: false,}} />
        <Stack.Screen name="QLPN" component={QLPN} options={{headerShown: false,}} />
        <Stack.Screen name="QLSP" component={QLSP} options={{headerShown: false,}} />
        <Stack.Screen name="ThemSP" component={ThemSP} options={{headerShown: false,}} />
        <Stack.Screen name="ThemPN" component={ThemPN} options={{headerShown: false,}} />
        <Stack.Screen name="SuaNV" component={SuaNV} options={{headerShown: false,}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
