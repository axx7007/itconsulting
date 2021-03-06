import styled from 'styled-components'


export const Container = styled.div`
width: 100%;
height:480px;
background-color: #F2F2F2;
display: flex;
flex-direction: column;
justify-content: center;
@media screen and (max-width: 1070px){
    display: flex;
}
`
Container.Title = styled.h1`
color: #1A2B6D;
letter-spacing: 2px;
font-size: 38px;
@media screen and (max-width: 1070px){
    /* display: flex; */
    font-size: 30px;
    @import url('https://fonts.googleapis.com/css2?family=Spinnaker&display=swap');
font-family: 'Spinnaker', sans-serif;
}
@import url('https://fonts.googleapis.com/css2?family=Spinnaker&display=swap');
font-family: 'Spinnaker', sans-serif;
@media screen and (max-width: 599px){
    font-size: 22px;
}
`

Container.Text = styled.div`
color: #1A2B6D;
letter-spacing: 2px;
font-size: 35px;
line-height: 50px;
margin-top: 20px;
@media screen and (max-width: 1070px){
    font-size: 28px;
    @import url('https://fonts.googleapis.com/css2?family=Spinnaker&display=swap');
font-family: 'Spinnaker', sans-serif;
}
@media screen and (max-width: 599px){
    font-size: 17px;
    line-height: 34px;
}
`

export const Author = styled.h2`
color: #D41317;
/* width: 20%; */
font-size: 16px;
margin-top: 30px;
`