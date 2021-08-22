import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {Text,SafeAreaView,TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { useAuth } from '../../hooks/auth'
import style from './style'

import Note from '../../assets/caderno.svg'
const Home: React.FC = () => {
    const navigation = useNavigation()
    
   
    return(
    <LinearGradient colors={[ '#21b5a7','#1993c3']} style={style.LinearGradient}>
    <SafeAreaView style={style.container}>
        <TouchableOpacity style={style.noteItem} onPress={()=>{navigation.navigate('MainAppointment')}}>
            <Note width="90" height="90" fill="#FFFFFF"> </Note>
        </TouchableOpacity>
        <Text style={style.titleNote}>AGENDA</Text>
      
    
          
    </SafeAreaView>
  
    </LinearGradient>
    )
}
export default Home