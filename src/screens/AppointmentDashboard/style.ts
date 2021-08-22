import { StyleSheet,FlatList } from 'react-native'
import styled from 'styled-components/native'
import {Provider} from './index'

export default StyleSheet.create(
    {
        container:{
            flex:1,
            marginVertical:10,
            
        
        },
        LinearGradient:{
            flex:1
         },
         title:{
             flexDirection:"row",
             justifyContent:"space-between",
             marginBottom:20
         },
         textTitle:{
             fontSize:30,
             color:"#FFFFFF",
             fontWeight:"bold",
             paddingRight:"15%",
             borderRightWidth:2,
             borderColor:"#FFFFFF"
         },

         providerItemContainer:{
            backgroundColor:"#FFFFFF",
            flexDirection:"row",
            height:126,
            alignItems:"center",
            paddingHorizontal:14,
            borderRadius:25,
            marginVertical:15

        },
        exampleIcon:{
            width:83,
            height:83,
            borderRadius:180,
            marginRight:10
        },
        secundaryIcon:{
            width:83,
            height:83,
            color:'black',
        },
        name:{
            fontSize:20,
            fontWeight:"bold"
        },
        providerInfo:{

        },
        providerText:{
            flexDirection:'row',
            alignItems:'center',
            fontSize:10,
            color:"#20B0AC",
           
        }
     
        })

        export const ProvidersList = styled(
            
            FlatList as new() => FlatList<Provider> 
        )`
        padding:0px 30px
        `