import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


import CustomTabBar from '../components/CustomTabBar'


import Home from '../screens/Home'
import Chat from '../screens/Chat'
import Profile from '../screens/Profile'
import MainAppointment from './MainAppointment'
import CreateAppointment from '../screens/CreateAppointment'
import AppointmentCreated from '../screens/AppointmentCreated'

const Dashboard: React.FC = () => {
   
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator tabBar={props=><CustomTabBar {...props}/>}  initialRouteName="Home" >
        
      
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Chat" component={Chat}/>
        <Tab.Screen name="Profile" component={Profile} options={{tabBarVisible:false}}/>
        <Tab.Screen name="CreateAppointment" component={CreateAppointment} options={{tabBarVisible:false}}/>
        <Tab.Screen name="AppointmentCreated" component={AppointmentCreated}  options={{tabBarVisible:false}}/>
        <Tab.Screen name="MainAppointment" component={MainAppointment}/>

        
       
        

    </Tab.Navigator>
    )}


export default Dashboard