import { StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

interface HourProps{
    available:boolean
    selected:boolean;
}
interface DayProps{
    selected:boolean;
    disabled:boolean
}
export default StyleSheet.create(
    {
        container:{
            flex:1
            
        
        },
        LinearGradient:{
            flex:1
         },
    
         perfil:{
            flex:1,
            alignItems:"center",
            backgroundColor:"#FFFFFF",
            marginTop:"20%",
            height:700,
            borderTopLeftRadius:40,
            borderTopRightRadius:40,
            paddingVertical:30,
            paddingHorizontal:30
            
            
         },
         messageButton:{
             backgroundColor:"#ffffff",
             alignSelf:"flex-end",
             marginTop:-50,
             padding:10,
             borderWidth:2,
             borderRadius:180
         },
         exampleIcon:{
            width:130,
            height:130,
            borderRadius:180,
          
          
        },
        name:{
            fontSize:30,
            fontWeight:"bold",
            textAlign:"center"
        },
        location:{
            fontSize:20,
            color:"#20B0AC",
            fontWeight:"bold",
            textAlign:"center"
        },
        buttonBack:{
            padding:20,
            alignSelf:"flex-start"
           
        },

        containerDate:{
            width:"100%",
            borderWidth:2,
            marginVertical:25,
            paddingHorizontal:10,
            paddingVertical:10,
            borderRadius:10,
        },
        dateInfo:{
            paddingBottom:20,
            justifyContent:"center",
            flexDirection:"row",
           
        },
        dateTitleArea:{
            width:170,
            justifyContent:"center",
            alignItems:"center",
            marginHorizontal:5,
        },
        dateTitle:{
            color:"#000000",
            fontWeight:"bold",
            fontSize:17
        },
        PrevArea:{
            flex:1,
            justifyContent:"flex-end",
            alignItems:"flex-end",
         
        },
        NextArea:{
            flex:1,
            justifyContent:"flex-start",
            alignItems:"flex-start"
        },
        dateItem:{
            width:60,
            borderRadius:10,
            paddingVertical:5,
            marginVertical:10,
            alignItems:"center",
            

            
        },
        dateItemWeekDay:{
            fontSize:18,
            fontWeight:"bold",
            color:"#000000"
        },
        dateNumber:{
            fontSize:18,
            fontWeight:"bold",
        },
        timeContainer:{
            marginBottom:25,
            paddingVertical:5,
            width:"100%",
            borderWidth:2,
            borderRadius:10,
            alignItems:"center",
            justifyContent:"center",
           
        },
      
        timeText:{
            color:"#000000",
            fontWeight:"bold",
            fontSize:16
        },
        finishButton:{
            width:"100%",
            backgroundColor:"#21B4A8",
            paddingVertical:20,
            borderRadius:180
            
        },
        finishText:{
            fontSize:18,
            textAlign:"center",
             color:"#FFF",
             fontWeight:"bold"
        }
        })
    


export const TimeItem = styled.TouchableHighlight<HourProps>`
       width:75px;
        height:40px;
      
        background-color:${props=>props.selected ? '#21b5a7' : '#FFFFFF'};
     
        align-items:center;
        justify-content:center;
        border-radius:10px;

       
        opacity: ${props=>props.available?1.0:0.2};
        
`;

export const TimeButton = styled.TouchableOpacity<DayProps>`
            width:60px;
            border-radius:10px;
            padding:5px 0px;
            margin:10px 0px;
            align-items:center;
            background-color:${props=>props.selected ? '#21b5a7' : '#FFFFFF'};
       
           

           
`;
