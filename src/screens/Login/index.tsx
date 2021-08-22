import React,{useCallback, useRef} from 'react'
import { Text,View,SafeAreaView,TouchableOpacity,TextInput,Alert } from 'react-native'
import { useNavigation} from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import * as Yup from 'yup'
import {Form} from '@unform/mobile'
import {FormHandles} from '@unform/core'

import getValidationErrors from '../../utils/getValidationErrors'
import {useAuth} from '../../hooks/auth'

import Input from '../../components/Input'
import Logo from '../../assets/logo_1.svg'




import style from './style'
interface SignInFormData{
    email:string,
    password:string

}
const Login: React.FC = () => {
 
    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null)
    const navigation = useNavigation()

    const {signIn, user} = useAuth()
    console.log(user)

   


   const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha é obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

       await signIn({
        email: data.email,
        password: data.password,
       });

       // history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }
        Alert.alert("Erro na autenticação","Ocorreu um error ao fazer login, cheque as credenciais")

       
      }
    },
    [signIn],
  );
    return(
    <LinearGradient colors={[ '#21b5a7','#1993c3']} style={style.LinearGradient}>
        <SafeAreaView style={style.container} >
                 <Logo width="100%" height="25%"/>
                 <View style={style.InputArea}>
                    <Form  ref={formRef} onSubmit={handleSignIn}>
                        <Input name="email" icon="mail" placeholder={"Digite seu email"}
                         autoCorrect={false} 
                         autoCapitalize="none"
                         keyboardType="email-address"
                         returnKeyType="next"
                         onSubmitEditing={()=>{
                             passwordInputRef.current?.focus()
                         }}/>

                        <Input name="password" icon="lock" placeholder={"Digite sua senha"}
                        ref = {passwordInputRef}
                        autoCapitalize="none"
                        secureTextEntry returnKeyType="send" 
                        onSubmitEditing={()=>{
                             formRef.current?.submitForm()
                        }}/>
                                
                                <TouchableOpacity style={style.ButtonLogin} onPress={()=>{
                                    formRef.current?.submitForm();}}>
                                    <Text style={style.ButtonText}>Login</Text>
                                </TouchableOpacity>
                        </Form>
                 </View>
                 <View>
                        <TouchableOpacity style={style.RegisterButton} onPress={() => {navigation.navigate('Register')}}>
                            <Text style={style.RegisterText}>Se não possui uma conta.</Text>
                            <Text style={style.RegisterTextBold}> Cadastre-se</Text>
                        </TouchableOpacity>

                 <TouchableOpacity>
                     <Text style={style.ForgetPassword}>Esqueci minha senha</Text>
                 </TouchableOpacity>
                 
                 </View>
        </SafeAreaView>
        </LinearGradient>
            )}

export default Login