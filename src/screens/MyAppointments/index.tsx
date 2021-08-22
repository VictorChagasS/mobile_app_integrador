import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {Text,SafeAreaView,TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { useAuth } from '../../hooks/auth'


import Note from '../../assets/caderno.svg'
const AppointmentDashboard: React.FC = () => {
    const navigation = useNavigation()
    
    const {signOut}=useAuth()
    return(
    <LinearGradient colors={[ '#21b5a7','#1993c3']}>
    <SafeAreaView>
    <Text>Dashboard</Text>
    
    
          
    </SafeAreaView>
  
    </LinearGradient>
    )
}
export default AppointmentDashboard