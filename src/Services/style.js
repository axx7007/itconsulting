import styled from 'styled-components'

export const Container = styled.div`
height: 384px;
margin-top: 450px;
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
display: flex;
justify-content: space-between;
`
export const Card = styled.div`
width:279px;
height: 329px;
background-color: #F2F2F2;
padding: 25px 30px 25px 30px;
margin-bottom: 20px;
margin-top: 40px;
box-shadow: 20px 20px 1px 1px rgba(0, 0, 255, .2);
`
Card.Title = styled.h1`
font-size: 28px;
color: #1A2B6D;
margin: 0;
padding: 0;
font-weight: 600;
`
Card.Text = styled.p`
font-size: 20px;
color: #000000;
line-height: 40px;
margin: 0;
padding: 0;
margin-top: 15px;
`

export const Learn = styled.a`
font-size: 18px;
color: #D41317;
cursor: pointer;
margin-top: 15px;
&:hover{
    color:#1A2B6D; 
}
`