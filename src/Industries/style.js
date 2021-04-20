import styled from 'styled-components'

export const Container=styled.div`
width: 100%;
display: flex;
flex-direction: column;
position: relative;
margin-top: 10px;
`
export const Main = styled.img`
width: 85%;
`

export const WhyButton = styled.a`
display: block;

position: absolute;
left: 200px;
top: 20px;
width: 122px;
height: 40px;
background-color: #D41317;
text-align: center;
line-height: 40px;
color: #FFFFFF;
font-size: 17px;
cursor: pointer;
&:hover{
    background-color: #1A2B6D;
}
`

export const WhyCard = styled.div`
width: 729px;
display: flex;
justify-content: center;
align-items: center;
height:263px;
position: absolute;
top: 420px;
left: 350px;
background-color:#F2F2F2;
`
WhyCard.Title = styled.h1`
font-size: 66px;
line-height: 40px;
color: #1A2B6D;
font-weight: 500;
letter-spacing: 4px;
`

export const Content = styled.div`
padding: 0% 23%;
margin-top: 210px;
display: flex;
flex-direction: column;
`

export const MiniContent = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 40px;
padding-right: 11%;
`
MiniContent.Title = styled.h1`
font-size: 28px;
color: #1A2B6D;
margin: 0;
padding: 0;
font-weight: 400;
`
MiniContent.Text = styled.p`
color: #000000;
font-size: 17px;
letter-spacing: 1.5px;
line-height: 30px;
font-weight: 100;
`
