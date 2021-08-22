import React, {useEffect, useRef, useState, useCallback, useImperativeHandle, forwardRef} from "react"
import {StyleSheet,TextInput,TextInputProps,View} from "react-native"
import Icon from 'react-native-vector-icons/Feather'
import {useField} from '@unform/core'
import {Container} from './Container'


interface InputProps extends TextInputProps {
   name: string;
   icon: string
   containerStyle?:{}
}

interface InputValueReference {
   value: string;

}
interface InputRef {
   focus():void
}

const Input: React.RefForwardingComponent<InputRef,InputProps> = ({name, icon,containerStyle={}, ...rest}, ref,) => {
   const inputElementRef = useRef<any>(null)
   const {registerField, defaultValue = '', fieldName, error} = useField(name)
   const inputValueRef = useRef<InputValueReference>({value:defaultValue})

   const [isFocused, setIsFocused]= useState(false)
   const [isFilled, setIsFilled] = useState(false)

   const handledInputFocus = useCallback(() => {
       setIsFocused(true)
   }, [])
   const handledInputBlur = useCallback(() => {
     setIsFocused(false)
     setIsFilled(!!inputValueRef.current.value)
 }, [])

   useImperativeHandle(ref, () => ({
      focus() {
         inputElementRef.current.focus()
      }
   })) 
   useEffect(()=>{
      registerField<string>({
         name:fieldName,
         ref: inputValueRef.current,
         path: 'value',
         setValue(ref:any, value) {
            inputValueRef.current.value = value;
            inputElementRef.current.setNativeProps({text: value})
         },
         clearValue(){
            inputValueRef.current.value = '';
            inputElementRef.current.clear()
         },

      })
   }, [fieldName,registerField])
   return(
      
     <Container style={containerStyle} isFocused={isFocused} isErrored={!!error}>
         <Icon name={icon} size={25} color={isFocused || isFilled? "#fff" : "#FFF"}/>
        <TextInput 
         ref={inputElementRef}
         style={style.inputText}
         placeholderTextColor="#FFF"
         defaultValue={defaultValue}
         onFocus={handledInputFocus}
         onBlur={handledInputBlur}

         onChangeText={(value) => {
            inputValueRef.current.value = value;}}
       
         {...rest}/>
      </Container>
    )}

export default forwardRef(Input)


const style = StyleSheet.create(
{
      
      inputText:{
         
         flex:1,
         paddingHorizontal:15,
         color:"#FFF"
      
      },
   
}
)