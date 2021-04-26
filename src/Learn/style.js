import styled from 'styled-components'



export const Container=styled.div`
width: 100%;
display: flex;
flex-direction: column;
position: absolute;
margin-top: 10px;
border: 1px solid black;
`

export const Header = styled.div`
width: 100%;
height: 150px;
background-color: #1A2B6D;
`
export const Content = styled.div`
padding: 0% 25%;
border: 1px solid black;
display: flex;
background-color: #F2F2F2;
height: fit-content;
flex-direction: column;
`
export const Card = styled.div`
width: 38%;
position: relative;
top: 50%;
left: 25%;
box-shadow:15px 15px 5px grey;
display: flex;
align-items: center;
/* justify-content: center; */
height: 225px;
min-width: 400px;
padding-left: 10%;
background-color: #FFFFFF;
`

Card.Title = styled.h1`
color: #1A2B6D;
font-size: 66px;
font-weight: 400;
width: 15%;
line-height: 70px;
`
export const ItemWrapper = styled.div`
display: flex;
margin-top: 230px;
/* border: 1px solid red; */
`
ItemWrapper.Line = styled.div`
flex: 1;
height: 5px;
margin-top: 15px;
background-color: #1A2B6D;
`
export const Texts = styled.div`
display: flex;
flex: 7;
margin-left: 30px;
flex-direction: column;
`
export const Text = styled.p`
color: #000000;
width: 95%;
letter-spacing: 2px;
line-height: 30px;
font-size: 17px;
margin: 0;
padding: 0;
margin-bottom: ${({bottom})=>bottom ? "80px": "40px"};
font-weight: 100;

`
