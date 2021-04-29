import styled from 'styled-components'

export const Container=styled.div`
width: 100%;
display: flex;
flex-direction: column;
position: relative;
margin-top: 10px;
@media screen and (max-width: 1070px){
    display: flex;
}
`
export const Main = styled.img`
width: 85%;
height: 534px;
@media screen and (max-width: 1070px){
    display: flex;
    width: 85%;
    height: fit-content;
}
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
export const MainContent = styled.div`
display: flex;
flex-direction: column;
position: relative;
padding: 0% 23%;
@media screen and (max-width: 1070px){
    display: flex;
    position: static;
    padding: 0;
}

`

export const WhyCard = styled.div`
/* width: 729px; */
width: 48%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: -110px;
@media screen and (max-width: 1070px){
    display: flex;
    position: static;
    width: 85%;
    height: fit-content;
}
background-color:#F2F2F2;
`
WhyCard.Title = styled.h1`
font-size: 66px;
line-height: 55px;
color: #1A2B6D;
margin: 0;
padding: 0;
font-weight: 500;
letter-spacing: 2px;
padding: 7% 0%;
@import url('https://fonts.googleapis.com/css2?family=Spinnaker&display=swap');
font-family: 'Spinnaker', sans-serif;
@media screen and (max-width: 1070px){
    font-size: 46px;
    line-height: 45px;
}
`

export const Content = styled.div`
/* padding: 0% 23%; */
margin-top: 208px;
@media screen and (max-width: 1070px){
    display: flex;
    padding: 0% 5%;
    margin-top: 50px;
}
width: 100%;
display: flex;
flex-direction: column;

`

export const MiniContent = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 40px;
/* padding-right: 11%; */
`
MiniContent.Title = styled.h1`
font-size: 28px;
color: #1A2B6D;
margin: 0;
padding: 0;
font-weight: 400;
@import url('https://fonts.googleapis.com/css2?family=Spinnaker&display=swap');
font-family: 'Spinnaker', sans-serif;
`
MiniContent.Text = styled.p`
color: #000000;
width: 89%;
font-size: 17px;
letter-spacing: 1.5px;
line-height: 30px;
font-weight: 100;
@media screen and (max-width: 1070px){
    display: flex;
    width: 80%;
}
`
