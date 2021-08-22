import React,{useRef, useCallback} from 'react'
import { Text,View,TouchableOpacity,TextInput, Alert, ScrollView, Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation} from '@react-navigation/native'
import {Form} from '@unform/mobile'
import {FormHandles} from '@unform/core'
import Icon from 'react-native-vector-icons/Feather'
import * as Yup from "yup"

import getValidationErrors from '../../utils/getValidationErrors'
import api from '../../services/api'

import Input from '../../components/Input'
import style from './style'
import {useAuth} from '../../hooks/auth'
import {launchImageLibrary} from 'react-native-image-picker'
interface ProfileFormData{
    name:string;
    email:string;
    old_password:string;
    password:string
    password_confirmation:string

}


const Profile: React.FC = () => {
  const {user, updateUser, signOut} = useAuth()
 

    const formRef = useRef<FormHandles>(null);
    const navigation=useNavigation()

    const EmailInputRef = useRef<TextInput>(null)
    const PasswordlInputRef = useRef<TextInput>(null)
    const OldpasswordlInputRef = useRef<TextInput>(null)
    const ConfimPasswordlInputRef = useRef<TextInput>(null)

        const handleProfile = useCallback(
          async (data: ProfileFormData) => {
            try {
              formRef.current?.setErrors({});
      
              const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('E-mail Obrigatório').email('Digite um e-mail válido'),
                old_password:Yup.string(),
                password:Yup.string().when('old_password',{
                    is: val => !!val.length,
                    then: Yup.string().required('Campo obrigatório'),
                    otherwise: Yup.string()
                }),
                password_confirmation: Yup.string().when('old_password',{
                    is: val=> !!val.length,
                    then: Yup.string().required('Campo obrigatório'),
                    otherwise: Yup.string()
                }).oneOf([Yup.ref('password'), null], 'Senhas não batem',),
                
            })

            await schema.validate(data, { abortEarly: false });
            const {name, email, password, old_password, password_confirmation} = data;
            const formData = Object.assign({
                name,
                email 
    
             
            }, data.old_password ? {
                old_password,
                password,
                password_confirmation
            }: {})
            

              
      
            const response = await api.put('/profile',formData)
            updateUser(response.data)
              Alert.alert("Perfil atualizado com sucesso")
              navigation.goBack();
      
            
            } catch (err) {
              if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
      
                formRef.current?.setErrors(errors);
                return;
              }
      
                Alert.alert('Erro na atualização do perfil','Ocorreu um error ao atualizar seu perfil, tente novamente');
            }
          },
          [navigation],
        
        );
        const handleGoBack = () =>{
          navigation.goBack()
        }

        const handleSignOut = () =>{
          signOut()
        }

        const handleUpdateAvatar = () =>{
         launchImageLibrary({
            mediaType:'photo',
    
            quality:1,
          },response=>{
            if(response.didCancel){
              return
            }
            if(response.errorMessage){
              Alert.alert('Erro', response.errorMessage )
            }
        
           console.log(response.uri)
              const data = new FormData()
              data.append('avatar',{
                uri:response.uri,
                type: 'image/jpg',
                name:`${user.id}.jpg`
              })

              console.log(JSON.stringify(data))
              api.patch('users/avatar',data).then(apiResponse=>{
               updateUser(apiResponse.data)
              })
          })
        }
    return(

      
    <LinearGradient colors={[ '#21b5a7','#1993c3']} style={style.LinearGradient}>
          <View style={style.container}>
          <ScrollView style={style.scrollView} showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={handleGoBack} style={style.backButton}>
              <Icon name='chevron-left' size={35} color="#FFFFFF"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSignOut} style={style.signOutButton}>
              <Icon name='log-out' size={35} color="#FFFFFF"/>
            </TouchableOpacity>

          <TouchableOpacity style={style.userAvatarButton} onPress={handleUpdateAvatar}>
             <Image source={user.avatar_url ? {uri:user.avatar_url}: require('../../assets/personIcon.png')} style={style.userAvatar}></Image>
            </TouchableOpacity>
            

          <View>
         
                    <Text style={style.title}>
                      Meu Perfil
                    </Text>
                  </View>
                <View style={style.InputArea}>
                 
                 <Form initialData={user}  ref={formRef} onSubmit={handleProfile} >
                    <Input name="name" icon="user" placeholder={"Digite seu nome"}
                    autoCapitalize="words"
                    returnKeyType="next"
                    onSubmitEditing={()=>{
                        EmailInputRef.current?.focus()
                    }}/>

                    <Input name="email" icon="mail" placeholder={"Digite seu email"}
                    ref={EmailInputRef}
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType="next"
                    onSubmitEditing={()=>{
                        OldpasswordlInputRef.current?.focus()
                    }}/>

                    <Input name="old_password" icon="lock" placeholder={"Senha atual"}
                    ref={OldpasswordlInputRef}
                    secureTextEntry
                    returnKeyType="next"
                    autoCapitalize="none"
                    containerStyle={{marginTop:26}}
                    onSubmitEditing={()=> PasswordlInputRef.current?.focus()}/>

                  <Input name="password" icon="lock" placeholder={"Nova senha"}
                    ref={PasswordlInputRef}
                    secureTextEntry
                    returnKeyType="next"
                    autoCapitalize="none"
                    onSubmitEditing={()=> ConfimPasswordlInputRef.current?.focus()}/>

                  <Input name="password_confirmation" icon="lock" placeholder={"Confirmar senha"}
                    ref={ConfimPasswordlInputRef}
                    secureTextEntry
                    returnKeyType="send"
                    autoCapitalize="none"
                    onSubmitEditing={()=>formRef.current?.submitForm()}/>

                    <TouchableOpacity style={style.ButtonLogin} onPress={()=>formRef.current?.submitForm()}>
                        <Text style={style.ButtonText}>Confirmar mudanças</Text>
                    </TouchableOpacity>
                 </Form>
             </View>
             </ScrollView>
             </View>
            
    </LinearGradient>
 
            )}

export default Profile