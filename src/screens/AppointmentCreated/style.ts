import { StyleSheet } from 'react-native'

export default StyleSheet.create(
{
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:24
        
    },
    LinearGradient:{
        flex:1
     },
     checkIcon:{
      padding:40,
      borderWidth:3,
      borderRadius:180,
      borderColor:"#FFFFFF"
  },
     title:{
        fontSize:32,
        color:"#FFFFFF",
        marginTop:48,
        textAlign:'center',
        fontWeight:'bold'
     }, 
     description:{
        fontSize:18,
        color:"#FFFFFF",
        marginTop:16,
        textAlign:'center'
     },
     okButton:{
        backgroundColor:"#21B4A8",
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:12,
        paddingHorizontal:24,
        marginTop:24,
        borderRadius:10,
     },
     okButtonText:{
         color:"#FFFFFF",
         fontSize:18,
     }
}
)