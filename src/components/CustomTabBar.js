import React from 'react'
import {View,TouchableOpacity,StyleSheet,Image} from 'react-native'
import {useAuth} from '../hooks/auth'


import HomeIcon from '../assets/home.svg'
import ChatIcon from '../assets/message.svg'
import ProfileIcon from '../assets/person.svg'




export default ({navigation, state,descriptors }) =>

{
    const {user} = useAuth()
    
    const GoToTab = (screenName) => {
        navigation.navigate(screenName)
 
    }
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    if (focusedOptions.tabBarVisible === false) {
        return null;
      }
    

    return(
        
        <View style={styled.TabArea}>

            <TouchableOpacity style={styled.TabItem} onPress={()=>GoToTab('Chat')}>
                <ChatIcon style={styled.sideButton} width="24" height="24" fill="#FFFFFF"></ChatIcon>
            </TouchableOpacity>

            <TouchableOpacity style={styled.TabItemCenter}  onPress={()=>GoToTab('Home')}>
            <HomeIcon  width="70" height="70" fill="#FFFFFF" ></HomeIcon>
            </TouchableOpacity>

            <TouchableOpacity style={styled.TabItem}  onPress={()=>GoToTab('Profile')}>
                {user.avatar_url? <Image style={styled.Image} source={{uri:user.avatar_url}}/>:
            <ProfileIcon  style={styled.sideButton} width="24" height="24" fill="#FFFFFF" ></ProfileIcon>}
            </TouchableOpacity>
               
        </View>
        
    )
  

}

const styled=StyleSheet.create({
    Image:{
        width:46,
        height:46,
        borderRadius:25,
    },
    TabArea:{
      
        justifyContent:"center",
        alignItems:"center",
        height:70,
        backgroundColor:"#1993C3",
        borderTopColor:"#FFFFFF",
        borderTopWidth:2,
        flexDirection:"row",
       paddingHorizontal:30,
      
    },
    TabItem:{
        
        justifyContent:"center",
        alignItems:"center",
        width:50,
        height:50,
        borderRadius:180,
        backgroundColor:"#2C9FC4"
       
    },
    TabItemCenter:{
        marginTop:-70,
        padding:20,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    sideButton:{
        flex:1,
        
    }
   
    
})

