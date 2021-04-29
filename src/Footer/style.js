import styled from 'styled-components'


export const Container = styled.div`
/* width: 100%; */
display: flex;
flex-direction: column;
justify-content: center;
/* align-items: center; */
height: 600px;
background-color: #1A2B6D;
padding: 0% 20%;
margin-top: ${({why})=>why?'200px':'0px'};
@media screen and (max-width: 1070px){
    padding: 0% 10%;
    height: fit-content;
}
`
Container.Title = styled.h1`
color: #ffffff;
font-size: 35px;
text-align:center;
letter-spacing: 4px;
`
export const InputWrapper = styled.div`
display: flex;
flex: 6;
flex-direction: column;
@media screen and (max-width: 1070px){
    display: flex;
    margin: 0;
}
margin-left: ${({margin})=>margin?'3%':'0px'};
/* border: 1px solid white; */
`
export const InputName = styled.h4`
font-size: 16px;
color: #ffffff;
letter-spacing: 2px;
margin: 0;
padding: 0;
margin-top:30px;
`

export const Input = styled.input`
flex: 1;
background-color: #1A2B6D;
border: none;
outline: none;
color: #ffffff;
font-size: 20px;
text-indent: 20px;
border-bottom: 1px solid #ffffff;
margin-top: 10px;


&:hover{
    border: 1px solid #ffffff;
}
`
export const SubmitWrapper = styled.div`
display: flex;
flex: 1;
justify-content: center;
`
export const Inputs = styled.div`
display: flex;
flex-direction: ${({text})=>text?"column":"row"};
width: 100%;
flex: 12;
height: fit-content;
@media screen and (max-width:1070px){
    display: flex;
    flex-direction: column;
}
`
export const TextArea = styled.textarea`
flex: 1;
height: 99px;

border: none;
border-bottom: 1px solid #ffffff;
background-color: #1A2B6D;
padding: 10px 10px 3px 16px;
margin-top: 10px;
color: #ffffff;
`
export const Submit = styled.a`
display: block;
text-align: center;
line-height: 40px;
width: 140px;
height: 40px;
cursor: pointer;
background-color: #1A2B6D;
font-size: 22px;
letter-spacing:2px; 
margin-top: 20px;
color: #ffffff;
/* align-items: center; */
font-weight: 500;
&:hover{
    background-color: #D41317;
}
`
Inputs.Adress = styled.p`
font-size: 13px;
color: #FFFFFF;
letter-spacing: 1.8px;
/* margin-top: 10px; */
font-weight: 600;
`




