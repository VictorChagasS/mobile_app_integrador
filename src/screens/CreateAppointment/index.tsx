import React,{useState, useEffect, useCallback, useMemo} from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView,View, TouchableOpacity,Image, Text, Alert, } from 'react-native'
import {format} from 'date-fns'
import Icon from 'react-native-vector-icons/Feather'
import style,{TimeItem, TimeButton} from './style'

import api from '../../services/api'


import PrevIcon from '../../assets/left-arrow.svg'
import { array, date } from 'yup/lib/locale'

interface RouteParams{
    providerId:string;
    providerName:string;
    providerAvatar:string
}
interface Provider{
    id:string;
    name:string;
    avatar_url:string;
}
interface AvailabilityItem{
    hour:number;
    available:boolean
}

const CreateAppointment: React.FC = () => {
    
    const route = useRoute()
    const navigation = useNavigation()
    const [providers, setProviders] = useState<Provider[]>([])

    const {providerId, providerName,providerAvatar} = route.params as RouteParams;
    const [selectedProvider, setSelectedProvider] = useState(providerId)
 
    const [selectedYear, setSelectedYear]= useState(0);
    const [selectedMonth, setSelectedMonth]= useState(0);
    const [selectedDay, setSelectedDay]= useState(0);
    const [selectedHour, setSelectedHour]=useState(0);
    const [listDays, setListDays] = useState<any[]>([]);
  
    const [availability, setAvailability] = useState<AvailabilityItem[]>([])

    const months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];
    const days = [
        'Dom',
        'Seg',
        'Ter',
        'Qua',
        'Qui',
        'Sex',
        'Sab'
    ]
    
   // useEffect(()=>{
   //     api.get('providers').then(response =>{
   //     setProviders(response.data)
   //     })
   // },[])



    /*TESTANDO AINDA */
    useEffect(()=>{
        api.get(`providers/${providerId}/day-availability`,{
            params:{
                year: selectedYear,
                month:selectedMonth + 1,
                day: selectedDay,
            }
        }).then(response =>{
            setAvailability(response.data)
    
        })
        setSelectedHour(0)
    },[selectedDay,providerId])
    

     useEffect(()=>{
        const daysInMonth = new Date(selectedYear, selectedMonth+1,0).getDate()
        const newListDays = Array()
       
   

        for( let i = 1; i <= daysInMonth; i++){
            const d = new Date(selectedYear,selectedMonth,i)
            let year = d.getFullYear();
            let month = d.getMonth()+1;
            let day = d.getDate();
            //const date = new Date (year+'-'+month+'-'+day)
        

        
            //const parsedMonth = month < 10 ? '0' + month : month;
          //  const parsedDay =  day < 10 ? '0' + day : day;

        
         //   console.log(parsedMonth)
           // console.log(parsedDay)
          
          
            newListDays.push({
                status:false,
                weekday:days[d.getDay()],
                number:i,
            })
            
             
        
            setListDays(newListDays)

           //if(new Date().getMonth() + 1 === month){
           

           setSelectedDay(0);
            //}

          
        }
        

    },[selectedMonth,selectedYear])



    useEffect(()=>{
        const today = new Date();
        setSelectedYear(today.getFullYear())
        setSelectedMonth(today.getMonth())
        setSelectedDay(today.getDate())
    },[])

    const handleLeftDateClick = () => {
        let mountDate = new Date(selectedYear, selectedMonth,1)
        mountDate.setMonth( mountDate.getMonth() - 1)
        setSelectedYear(mountDate.getFullYear())
        setSelectedMonth(mountDate.getMonth())
        setSelectedDay(0)
        
       
    }
    const handleRightDateClick = () => {
        let mountDate = new Date(selectedYear, selectedMonth,1)
        mountDate.setMonth( mountDate.getMonth() + 1)
        setSelectedYear(mountDate.getFullYear())
        setSelectedMonth(mountDate.getMonth())
        setSelectedDay(0)
      
       
    }
    

  //console.log(availability)
    const hourAvailability = useMemo(()=>{
      return availability.map(({hour,available})=>{
          return{
          available,
          hour,
          hourFormated: format(new Date().setHours(hour),'HH:00')
      
        }
        
      })
    },[availability])

    const handleSelectedHour= useCallback((hour:number)=>{
        setSelectedHour(hour)
       
    },[])
   
  
    
    
    const handleFinishAppointment = async ()=>{
        try {
          
            const date = new Date(selectedYear,selectedMonth, selectedDay)
            date.setHours(selectedHour)
            date.setMilliseconds(0)
            console.log(date)
           

            await api.post('appointments',{
               provider_id:providerId,
               date
            })
            setSelectedDay(0)
            navigation.navigate('AppointmentCreated',{date:date.getTime()})
        }
        catch(err){
            Alert.alert('Erro ao criar agendamento','Ocorreu um erro ao tentar criar o agendamento, tente novamente')

        }
      

    }

    

    
    
    return(
    <LinearGradient colors={[ '#21b5a7','#1993c3']}>
         <ScrollView>
            <View style={style.container}>
           
                <TouchableOpacity style={style.buttonBack} onPress={()=>{{navigation.goBack()} setSelectedDay(0)}}>
                <Icon name="chevron-left" size={30} color="#FFFFFF" />
                </TouchableOpacity>
                <View style={style.perfil}>
                    
                    <TouchableOpacity style={style.messageButton}>
                        <Icon name="send" size={30} color="#000000"></Icon>
                    </TouchableOpacity>
                    <Image style={style.exampleIcon} source={providerAvatar?{uri:providerAvatar}:require('../../assets/personIcon.png')}/>
                        <Text style={style.name}>{providerName}</Text>
                        <Text style={style.location}>Campus Lagarto</Text>

                        <View style={style.containerDate}>
                            <View style={style.dateInfo}>
                            <TouchableOpacity style={style.PrevArea} onPress={handleLeftDateClick}><Icon name="chevron-left" size={45} ></Icon></TouchableOpacity>
                            <View style={style.dateTitleArea}>
                                <Text style={style.dateTitle}>{months[selectedMonth]} {selectedYear}</Text>
                            </View>
                            <TouchableOpacity style={style.NextArea} onPress={handleRightDateClick}><Icon name="chevron-right" size={45} ></Icon></TouchableOpacity>
                            </View>

                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                              
                                 {listDays.map( (item,key)=>( 
                                     <TimeButton selected={item.number === selectedDay} disabled={item.weekday === 'Dom'|| item.weekday === 'Sab' ? true : false} key={key}  onPress={() => setSelectedDay(item.number)}>
                                     <Text style={[style.dateItemWeekDay, {color: item.number === selectedDay ? '#FFFFFF' : "#000000"},{opacity:item.weekday === 'Dom'|| item.weekday === 'Sab' ? 0.2 : 1.0}]}>{item.weekday}</Text>
                                     <Text style={[style.dateNumber,{color: item.number === selectedDay ? '#FFFFFF' : "#000000"},{opacity:item.weekday === 'Dom'|| item.weekday === 'Sab' ? 0.2 : 1.0}]}>{item.number}</Text>
                                 </TimeButton>

                                  
                                 ))}

                            </ScrollView>
                          
                        </View>
                        {selectedDay > 0 &&
                              
                        <View style={style.timeContainer}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {hourAvailability.map(({hourFormated,hour, available})=>(
                                    <TimeItem underlayColor="#FFFFFF" disabled={!available} available={available}  selected={selectedHour === hour} key={hourFormated} onPress={()=>handleSelectedHour(hour)}>
                                          <Text style={[style.timeText, {color:selectedHour === hour ? '#FFFFFF' : '#000000'}]}>{hourFormated}</Text>
                                    </TimeItem>
                                    
                                ))}
                             </ScrollView>
                        </View> 
                        }
                        
                        <TouchableOpacity style={style.finishButton} onPress={handleFinishAppointment}><Text style={style.finishText}>Finalizar agendamento</Text></TouchableOpacity>

                </View>
              

            </View>
            </ScrollView>
  
    </LinearGradient>
    )
}
export default CreateAppointment