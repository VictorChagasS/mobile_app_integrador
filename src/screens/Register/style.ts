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
         InputArea:{
             
             width:"100%",
             padding:30,
             marginBottom:'5%'
            
         },
         ButtonLogin:{
             marginTop:"10%",
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
             fontWeight:"bold",

         },
         BackLoginButton:{
           flexDirection:"row",
           justifyContent:"center",
         
         },
         BackLoginText:{
             color:"#FFF",
             textAlign:"center",
            
         },
         BackLoginTextBold:{
            color:"#FFF",
             fontWeight:"bold"
         }
        

    }
)