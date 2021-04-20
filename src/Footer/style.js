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
`
Container.Title = styled.h1`
color: #ffffff;
font-size: 35px;
text-align:center;
letter-spacing: 4px;
`
export const InputWrapper = styled.div`
display: flex;
flex-direction: column;
margin-left: ${({margin})=>margin?'70px':'0px'};
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
width: 400px;
height:42px;
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
export const Inputs = styled.div`
display: flex;
justify-content: space-between;
`
export const TextArea = styled.textarea`
width: 860px;
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
color: #ffffff;
margin-top: 20px;
/* align-items: center; */
margin-left: 390px;
font-weight: 500;
&:hover{
    background-color: #D41317;
}
`
Inputs.Adress = styled.p`
font-size: 13px;
color: #FFFFFF;
letter-spacing: 1.8px;
margin-top: 20px;
font-weight: 600;
`




