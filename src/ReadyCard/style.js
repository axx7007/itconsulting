import styled from 'styled-components'

export const Container = styled.div`
margin-top: 280px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 100px;
height: 663px;
/* border: 1px solid black; */
display: flex;
flex-direction: column;
margin-top: 700px;

`
export const TopLine = styled.div`
/* width: 15px; */
height: 15px;
background-color: #1A2B6D,
`

export const Line = styled.div`
width: 100%;
height: 15px;
background-color: #1A2B6D;
`

export const CardWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 100px;
`
export const Card = styled.div`
width: 800px;
height: 300px;
background-color: #F2F2F2;
padding: 50px 150px;
@import url('https://fonts.googleapis.com/css2?family=Spinnaker&display=swap');
`
Card.Title = styled.div`
font-size: 60px;
color: #1A2B6D;
letter-spacing: 4px;
font-family: Spinnaker;
font-weight: 600;
`
export const CardContent = styled.div`
display: flex;
margin-top: 50px;
`
export const CardLine = styled.div`
width: 113px;
height: 4px;
background-color: #1A2B6D;
margin: 13px 5px;
`

Card.Text = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
font-family: Nunito;
font-size: 20px;
line-height: 40px;
letter-spacing: 2px;
color: #000000;
margin: 0;
padding: 0;
margin-left: 30px;
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