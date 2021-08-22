import React, { useCallback, useMemo } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {Text,SafeAreaView,TouchableOpacity, ScrollView} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather' 

import style from './style'
import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

interface RouteParams{
    date:number
}
const AppointmentDashboard: React.FC = () => {
    const {reset} = useNavigation();
    const {params} = useRoute()
    const routeParams = params as RouteParams;

   
    const handleOkPressed= useCallback(()=>{

        reset({
            routes:[
                {
                    name:'Home'
                }
            ],index:0
        })
    },[reset])

    const formattedDate = useMemo(()=>{
        return format(routeParams.date, "EEEE,'dia' dd 'de' MMMM 'de' yyyy 'às' HH:mm'h'", {locale:ptBr})
    },[routeParams.date])


    
    return(
    <LinearGradient colors={[ '#21b5a7','#1993c3']}  style={style.LinearGradient}>
    <SafeAreaView style={style.container}>
      <Icon name="check" size={80} color="#FFFFFF" style={style.checkIcon}/>
    <Text style={style.title}>Agendamento concluído</Text>
    <Text style={style.description}>{formattedDate}</Text>
    <TouchableOpacity style={style.okButton} onPress={handleOkPressed}>
        <Text style={style.okButtonText}>Ok</Text>
    </TouchableOpacity>
    
          
    </SafeAreaView>
  
    </LinearGradient>
    )
}
export default AppointmentDashboard