import React,{useRef, useCallback} from 'react'
import { Text,View,SafeAreaView,TouchableOpacity,TextInput, Alert} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation} from '@react-navigation/native'
import {Form} from '@unform/mobile'
import {FormHandles} from '@unform/core'
import * as Yup from "yup"

import getValidationErrors from '../../utils/getValidationErrors'
import api from '../../services/api'

import Input from '../../components/Input'
import Logo from '../../assets/logo_1.svg'

import style from './style'
import { ScrollView } from 'react-native-gesture-handler'

interface SignUpFormData{
    name:string;
    email:string;
    password:string

}
const Register: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const navigation=useNavigation()

    const EmailInputRef = useRef<TextInput>(null)
    const PasswordlInputRef = useRef<TextInput>(null)

        const handleSignUp = useCallback(
          async (data: SignUpFormData) => {
            try {
              formRef.current?.setErrors({});
      
              const schema = Yup.object().shape({
                name: Yup.string().required('Nome é obrigatório'),
                email: Yup.string()
                  .required('E-mail é obrigatório')
                  .email('Digite um e-mail válido'),
                password: Yup.string().min(6, 'No mínimo 6 dígitos'),
              });
      
              await schema.validate(data, { abortEarly: false });
      
              await api.post('/users', data);
              Alert.alert("Cadastro realizado com sucesso", "Você já pode fazer login no aplicativo")
              navigation.goBack();
      
            
            } catch (err) {
              if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
      
                formRef.current?.setErrors(errors);
                return;
              }
      
                Alert.alert('Erro na cadastro','Ocorreu um error ao fazer cadastro, tente novamente');
            }
          },
          [navigation],
        );
    return(
    <LinearGradient colors={[ '#21b5a7','#1993c3']} style={style.LinearGradient}>
     
    <SafeAreaView style={style.container} >
             <Logo width="100%" height="25%"/>
                <View style={style.InputArea}>
                 <Form ref={formRef} onSubmit={handleSignUp} >
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
                        PasswordlInputRef.current?.focus()
                    }}/>

                    <Input name="password" icon="lock" placeholder={"Digite sua senha"}
                    ref={PasswordlInputRef}
                    secureTextEntry
                    returnKeyType="send"
                    autoCapitalize="none"
                    onSubmitEditing={()=>formRef.current?.submitForm()}/>

                    <TouchableOpacity style={style.ButtonLogin} onPress={()=>formRef.current?.submitForm()}>
                        <Text style={style.ButtonText}>Cadastrar</Text>
                    </TouchableOpacity>
                 </Form>
             </View>


             <TouchableOpacity style={style.BackLoginButton} onPress={() => {navigation.goBack()}}>
                 <Text style={style.BackLoginText}>Se já possui uma conta.</Text>
                 <Text style={style.BackLoginTextBold}> Entre</Text>
             </TouchableOpacity>
           
    </SafeAreaView>
    </LinearGradient>
            )}

export default Register