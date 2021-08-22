
import { StyleSheet } from 'react-native'


export default StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:"center",
            justifyContent:"center",
        
        },
        LinearGradient:{
            flex:1
         },
         InputArea:{
             
             width:"100%",
             padding:30,
            
         },
         ButtonLogin:{
            marginTop:"20%",
            height:70,
            alignItems:"center",
            justifyContent:"center",
            padding:10,
            borderRadius:180,
            backgroundColor:"#21B4A8", 
         },
         ButtonText:{
             fontSize:22,
             color:"#FFF",
             fontWeight:"bold"

         },
         RegisterButton:{
           flexDirection:"row"
         },
         RegisterText:{
             color:"#FFF",
             textAlign:"center",
            
         },
         RegisterTextBold:{
            color:"#FFF",
             fontWeight:"bold"
         },
         ForgetPassword:{
            color:"#FFF",
            textAlign:"center",
            marginTop:"7%",
         }

    }
)