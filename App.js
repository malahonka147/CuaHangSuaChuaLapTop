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
import SuaNV from './components/SuaNV';
import ThemNV from './components/ThemNV';
import CTPN from './components/CTPN';
import CTSP from './components/CTSP';
<<<<<<< HEAD
import SuaSP from './components/SuaSP';
=======
>>>>>>> 6f7d784fd3fd6594232fa567d6c59c44accb07f4
import ThemCTPN from './components/ThemCTPN';
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
        <Stack.Screen name="ThemNV" component={ThemNV} options={{headerShown: false,}} />
<<<<<<< HEAD
        <Stack.Screen name="SuaSP" component={SuaSP} options={{headerShown: false,}} />
        <Stack.Screen name="CTSP" component={CTSP} options={{headerShown: false,}}/> 

        <Stack.Screen name="CTPN" component={CTPN} options={{headerShown: false,}} />
        <Stack.Screen name="ThemCTPN" component={ThemCTPN} options={{headerShown: false,}} />

=======
        <Stack.Screen name="CTSP" component={CTSP} options={{headerShown: false,}}/>
        <Stack.Screen name="CTPN" component={CTPN} options={{headerShown: false,}}/>
        <Stack.Screen name="ThemCTPN" component={ThemCTPN} options={{headerShown: false,}}/>

>>>>>>> 6f7d784fd3fd6594232fa567d6c59c44accb07f4
      </Stack.Navigator>
    </NavigationContainer>
  );
}
