import styled from 'styled-components'

export const Container=styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 10px;
@media screen and (max-width: 1070px){
    display: flex;
}
`
export const Main = styled.img`
width: 85%;
height: 534px;
@media screen and (max-width:1070px){
    width: 85%;
    height: fit-content;
}

`
export const MainContent = styled.div`
display:flex;
flex-direction: column;
padding: 0% 23%;
position: relative;
@media screen and (max-width: 1070px){
    display: flex;
    flex-direction: column;
    position: static;
    padding: 0;
}
`

export const WhyCard = styled.div`
width: 48%;
display: flex;
justify-content: center;
align-items: center;
height:263px;
position: absolute;
top: -140px;
/* left: 350px; */
@import url('https://fonts.googleapis.com/css2?family=Spinnaker&display=swap');
font-family: 'Spinnaker', sans-serif;
background-color:#F2F2F2;
@media screen and (max-width: 1070px){
    /* display: flex; */
    position: static;
    width: 85%;
    height: fit-content;
}
`
WhyCard.Title = styled.h1`
font-size: 66px;
line-height: 40px;
color: #1A2B6D;
font-weight: 500;
letter-spacing: 4px;
@media screen and (max-width:1070px){
    font-size:46px;
    line-height: 45px;
    padding: 5% 0%;
}
`

export const Content = styled.div`
margin-top: 210px;
display: flex;
flex-direction: column;
@media screen and (max-width: 1070px){
    margin-top: 50px;
    padding: 0% 5%;
}
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
