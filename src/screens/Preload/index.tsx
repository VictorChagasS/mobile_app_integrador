import React, { useEffect } from 'react'
import {SafeAreaView, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-community/async-storage'
import {useNavigation} from '@react-navigation/native'

import style from './style'
import Logo from '../../assets/logo_1.svg'




const Register: React.FC = () => {
    return(
        <LinearGradient colors={[ '#21b5a7','#1993c3']} style={style.LinearGradient}>
        <SafeAreaView style={style.container} >
                 <Logo width="100%" height="220"/>
                 <ActivityIndicator style={style.LoadingIcon} size="large" color="#FFF"/>
        </SafeAreaView>
        </LinearGradient>
  
    )
}

export default Register