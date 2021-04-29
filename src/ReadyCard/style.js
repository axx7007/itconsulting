import styled from 'styled-components'

export const Container = styled.div`
display: flex;
/* align-items: center; */
margin-bottom: 30px;
/* height: 663px; */
display: flex;
flex-direction: column;
`

export const ItemWrapper = styled.div`
display: flex;
padding: 0% 13%;
`
export const TopLine = styled.div`
/* width: 15px; */
height: 15px;
background-color: #1A2B6D;
`

export const Line = styled.div`
width: 100%;
height: 15px;
background-color: #1A2B6D;
`

export const CardWrapper = styled.div`
display: flex;
flex: 1;
flex-direction: column;
margin-top: 100px;
`
export const Card = styled.div`
/* width: 80%; */
display: flex;
flex: 1;
flex-direction: column;
/* justify-content: center; */
/* align-items: center; */
/* height: 300px; */
background-color: #F2F2F2;
padding: 5% 15%;
@import url('https://fonts.googleapis.com/css2?family=Spinnaker&display=swap');
`
Card.Title = styled.div`
font-size: 60px;
color: #1A2B6D;
letter-spacing: 4px;
@import url('https://fonts.googleapis.com/css2?family=Spinnaker&display=swap');
font-family: 'Spinnaker', sans-serif;
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
font-family: Nunito;
font-size: 20px;
line-height: 40px;
letter-spacing: 1px;
color: #000000;
margin: 0;
padding: 0;
margin-left: 30px;
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@600&display=swap");
font-family: "Manrope", sans-serif;
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