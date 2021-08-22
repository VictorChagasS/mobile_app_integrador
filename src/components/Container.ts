import styled,{ css } from 'styled-components/native'

interface ContainerProps {
    isFocused:boolean;
    isErrored: boolean;
}
export const Container = styled.SafeAreaView<ContainerProps>`
    flex-direction:row;
    align-items:center;
    height:70px;
    margin:3px 0px;
    border-radius:180px;
    background-color:rgba(255,255,255,0.2);
    padding-left:20px;
    border-width:2px;
    border-color:transparent

    
    
    ${(props) =>
        props.isErrored && css`border-color:#ff6961`}
    ${(props) =>
        props.isFocused && css`border-color:transparent`}`;

   

