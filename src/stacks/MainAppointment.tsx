import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {StyleSheet} from 'react-native'

import AppointmentDashboard from '../screens/AppointmentDashboard'
import MyAppointments from '../screens/MyAppointments'

const MainAppointment: React.FC = () => {
   
    const TopTab = createMaterialTopTabNavigator();

    return(
        <TopTab.Navigator initialRouteName="Agendamento"
        tabBarOptions={{ style: styled.topbar, activeTintColor:"#FFFFFF", } }>
          <TopTab.Screen name="Agendamento" component={AppointmentDashboard} />
          <TopTab.Screen name="Minha agenda" component={MyAppointments} />
        </TopTab.Navigator>
    )}
const styled = StyleSheet.create({
  topbar:{
    backgroundColor:"#21b5a7"
  }
})
    

export default MainAppointment