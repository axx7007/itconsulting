import styled from 'styled-components'



export const Container = styled.div`
height: fit-content;
position: relative;
padding-top: 10px;
box-sizing: border-box;
display: flex;
flex-direction: column;
padding-right: 10%;
@media screen and(max-width: 1070px){
    position: static;
    display: flex;
    flex-direction: column;
    padding-left: 5%;
}
@media screen and (max-width: 599px){
    padding: 0;
    position: relative;
    padding: 0;
}
`
export const MobileLogo = styled.div`
width: 70px !important;
height: 40px;
display: none;
align-items: center;
justify-content: center;
border: 3px solid #1A2B6D;
@media screen and (max-width: 599px){
    display: none;
    position: absolute;
    left:10px;
    top: 10px;
    &:hover{
        color: #D41317;
        
    }
}
`
MobileLogo.Title = styled.h4`
display: none;
margin: 0;
padding: 0;
color: #1A2B6D;
font-weight:900;
line-height: 40px;
@media screen and (max-width: 599px){
    display: none;
}
`
export const Picture = styled.img`
width: 90%;
height: 534px;
@media screen and (max-width: 1070px){
    width: 100%;
    height: fit-content;
    margin-left: 3%;
}
@media screen and (max-width: 599px){
    margin:0;
    padding: 0;
    width: 100%;
}
`
export const Line = styled.div`
width: 100%;
@media screen and (max-width: 1070px){
display: flex;
margin-left: 3%;
}
@media screen and (max-width: 599px){
    margin:0;
}
height: 15px;
background-color:#1A2B6D;
`
export const Card = styled.div`
display: flex; 
flex-direction: column;


background-color: #f2f2f2;
padding: 30px 45px;
@media screen and (max-width: 599px){
    /* padding:0; */
}
`
Card.Title = styled.h1`
font-size: 66px;
color: #1A2B6D;
margin: 0;
padding: 0;
@import url('https://fonts.googleapis.com/css2?family=Spinnaker&display=swap');
font-family: 'Spinnaker', sans-serif;
font-weight: 400;
line-height: 65px;
@media screen and(max-width: 1070px){
    font-size: 50px;
    display: flex;
}
@media screen and (max-width: 599px){
    font-size: 46px;
}
`
export const Content = styled.div`
display: flex;
margin-top: 50px;
`
export const MiniLine = styled.div`
width:15%;

/* flex: 2; */
height:4px;
margin-top:5px;
background-color: #1A2B6D;
`

Content.Text = styled.p`
font-size: 22px;
width: 75%;
color: #000000;
margin: 0;
padding: 0;
line-height: 35px;
margin-left: 30px;
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@600&display=swap");
font-family: "Manrope", sans-serif;
@media screen and (max-width: 599px){
    font-size: 16px;
    line-height:25px;
    width:70%;
}
`
export const CardWrapper = styled.div`
display: flex;
width: 50%;
flex-direction: column;
position: absolute;
height: 15%;
left: 38%;
top: 65%;
@media screen and (max-width: 1070px){
    display: flex;
    position: static;
    margin:0;
    width: 100%;
    height: fit-content;
    margin-left: 3%;
}
@media screen and (max-width: 599px){
    margin:0;
}
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