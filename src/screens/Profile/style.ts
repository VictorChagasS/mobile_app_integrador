import { StyleSheet } from 'react-native'


export default StyleSheet.create(
    {
   
       container:{
         
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:30,
        position:'relative'
       },
       scrollView:{
           flex:1,
       },
       title:{
        color:'#FFFFFF',
        fontSize:20,
        alignSelf:'flex-start',
        marginVertical:14,
        fontWeight:'bold'
       },
     
       backButton:{
           position:'absolute',
           left:0,
           top:0,
       },
       signOutButton:{
        position:'absolute',
        right:0,
        top:0,
    },
        
        LinearGradient:{
            flex:1,
            
         },
         userAvatarButton:{
            width:176,
            alignSelf:'center',
            marginTop:44,
          
         },
         userAvatar:{
            borderRadius:88,
            borderWidth:88,
           width:176,
           height:176
          
           
           
         },
         InputArea:{
             width:"100%",
       
         },
         ButtonLogin:{
            marginTop:10,
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