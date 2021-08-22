import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Preload from '../screens/Preload'
import Register from '../screens/Register'
import Login from '../screens/Login'

//import MainTab from '../stacks/MainTab'
//import PsicoScreen from '../screens/PsicoScreen'

const AuthRoutes: React.FC = () => {
    const Stack = createStackNavigator()
    return(
    <Stack.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName="Login">
    
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Login" component={Login}/>
       
    </Stack.Navigator>

    )}
    export default AuthRoutes