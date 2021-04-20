import styled from 'styled-components'



export const Container = styled.div`
height: fit-content;
position: relative;
padding-top: 10px;
box-sizing: border-box;
display: flex;
flex-direction: column;
`
export const Picture = styled.img`
width: 77%;
`
export const Line = styled.div`
width: 90%;
height: 15px;
background-color:#1A2B6D;
`
export const Card = styled.div`
display: flex; 
flex-direction: column;
width: 685px;
height: 428px;

background-color: #f2f2f2;
padding: 30px 30px 30px 30px;
`
Card.Title = styled.h1`
font-size: 66px;
color: #1A2B6D;
margin: 0;
padding: 0;
line-height: 65px;
`
export const Content = styled.div`
display: flex;
margin-top: 50px;
`
export const MiniLine = styled.div`
width: 113px;
height:4px;
margin-top:5px;
background-color: #1A2B6D;
`

Content.Text = styled.p`
font-size: 22px;
color: #000000;
font-family: Helvetica, sans-serif;
font-weight: 100;
margin: 0;
padding: 0;
line-height: 40px;
margin-left: 30px;
`
export const CardWrapper = styled.div`
display: flex;
flex-direction: column;
position: absolute;
left: 35%;
top: 65%;
`
export const Buttons = styled.div`
display: flex;
margin-left: auto;
`
export const Button1 = styled.a`
width: 52px;
height: 52px;
display: flex;
align-items: center;
justify-content: center;
background-color: #1A2B6D;
font-size: 30px;
color: #ffffff;
cursor: pointer;
&:hover{
    background-color: #D41317;
}
`
export const Button2 = styled.a`
width: 177px;
height: 52px;
display: flex;
justify-content: center;
align-items: center;
color: #ffffff;
background-color:#D41317;
cursor: pointer;
&:hover{
    background-color: #1A2B6D;
}
`
export const LineBottom = styled.div`
height: 427px;
border: 1px solid orange;
`