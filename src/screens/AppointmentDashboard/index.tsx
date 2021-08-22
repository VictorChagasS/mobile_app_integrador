import React, { useCallback, useEffect, useState } from 'react'
import {View, Text, TouchableOpacity,Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'

import style from './style'
import {ProvidersList} from './style'

import PsiIcon from '../../assets/psicologo.svg'


import api from '../../services/api'


//import PsicoItem from '../../components/PsicoItem'

export interface Provider{
    id:string;
    name:string;
    avatar_url:string;
}

const AppointmentDashboard: React.FC = () => {
    const {navigate} = useNavigation()
    const [providers, setProviders] = useState<Provider[]>([])


    useEffect(()=>{
        api.get('providers').then(response =>{
        setProviders(response.data)
        })
    },[])

    const navigateToAppointment = useCallback((providerId:string, providerName:string, providerAvatar:string)=>{
        navigate('CreateAppointment',{providerId, providerName, providerAvatar})
    },[navigate])

    return(
        <LinearGradient colors={[ '#21b5a7','#1993c3']} style={style.LinearGradient}>
         
     
            <View style={style.container}>
        
            

               <ProvidersList ListHeaderComponent={
                   <View  style={style.title}>
                   <Text style={style.textTitle}>Escolha seu{"\n"}psicólogo</Text>
                   <PsiIcon width="73" height="60"  fill="#FFFFFF"/>
              
                 </View>}
                 data={providers} keyExtractor={provider => provider.id}  renderItem={({item: provider})=>(
                   
                    <TouchableOpacity style={style.providerItemContainer} onPress={()=>{navigateToAppointment(provider.id, provider.name,provider.avatar_url)}}>
                    <View>
                  
                    <Image
                    style={style.exampleIcon}
                    source={provider.avatar_url?{uri:provider.avatar_url}:require('../../assets/personIcon.png')}/>
            
                    </View>
                    
                        <View>
                        
                        <Text style={style.name}>{provider.name}</Text>
                        <View>
                          
                            <Text style={style.providerText}>Campus Lagarto</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
               )} />


               
            </View>
        
            
           
      
        </LinearGradient>
    )}
export default AppointmentDashboard

