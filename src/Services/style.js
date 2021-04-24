import styled from 'styled-components'



export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: fit-content;
margin-top: 450px;
position: relative;
`
export const Header = styled.div`
height: 384px;
background-color: #1A2B6D;
padding: 25px 15% 0px 15%;
`
Container.Title = styled.h1`
color: #ffffff;
font-size: 55px;
margin: 0;
padding: 0;
font-weight: 100;
`
Container.Text = styled.p`
color: #ffffff;
font-size: 16px;
line-height: 35px;
`
export const Content = styled.div`
padding: 0% 15%;
position: relative;
top: -150px;
display: grid; 
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));  ;
grid-gap: 35px;
`
export const Card = styled.div`
display: flex;
flex:1;
/* align-items: center; */
/* justify-content: center; */
flex-direction: column;
/* width: 279px; */
height: 329px;
padding: 30px;
background-color: #F2F2F2;
box-shadow: 15px 15px grey;
`

Card.Title = styled.h1`
color: #1A2B6D;
font-size: 30px;
margin: 0;
padding: 0;
letter-spacing: 2px;
width: 70%;
line-height: 40px;
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap');
font-family: 'Inconsolata', monospace;
`
Card.Text = styled.p`
color: #000000;
width: 90%;
letter-spacing: 1px;
line-height: 30px;
font-size: 17px;
font-weight: 400;
margin: 0;
padding: 0;
margin-top: 20px;
`
export const Button = styled.a`
color: #D41317;
font-size: 18px;
margin: 0;
padding: 0;
margin-top: 20px;
`
