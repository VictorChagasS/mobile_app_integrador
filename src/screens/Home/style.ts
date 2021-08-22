import { StyleSheet } from 'react-native'

export default StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:"center",
            justifyContent:"center"
        
        },
        LinearGradient:{
            flex:1
         },
         noteItem:{
            justifyContent:"center",
            alignItems:"center",
            width:200,
            height:200,
            borderRadius:180,
            backgroundColor:"#1DA1B8",
            borderWidth:2,
            borderColor:"#FFFFFF"
       
         },
         titleNote:{
             fontSize:34,
             color:"#FFFFFF",
             fontWeight:"bold",
             marginVertical:20
         }
})