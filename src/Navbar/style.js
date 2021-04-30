import styled from 'styled-components'

export const Container = styled.div`
display: flex;
padding-right: 20%;
position:relative;
height: 128px;
align-items: center;
padding-left: 3%;
@media screen and (max-width: 1070px){
    display: flex;
}
@media screen and (max-width: 599px){
    display: flex;
    flex-direction: column;
    position: static;
}
`
export const Logo = styled.div`
width: 140px !important;
position: fixed;
width: 13%;
z-index: 3;
height: 63px;
cursor: pointer;
border: 5px solid #1A2B6D;
@media screen and (max-width: 599px){
    display: none;
    position: static;
    z-index:0;
}
&:hover{
    border: 5px solid #D41317;
    color: #D41317;
}

`

Logo.Title = styled.h1`
font-size: 26px;
color:#1A2B6D;
font-weight: 900;
white-space: nowrap;
font-family: Arial;
font-weight: 900;
line-height: 63px;
margin: 0;
padding: 0;
padding: 0px 23px;

&:hover{
    color: #D41317;
}
@media screen and (max-width: 599px){
    display: none;
    position: static;
}
`
export const ItemWrapper = styled.div`
display: flex;
margin-left: auto;
`

export const Menu = styled.div`
display: flex;
`
export const MenuName = styled.a`
display: flex;
justify-content: center;
white-space: nowrap;
align-items: center;
font-family: Arial, Helvetica, sans-serif;
font-weight: 900;
font-size: 16px;
color:${({ active }) => active ? "#D41317" : "#1A2B6D"};
padding: 0% 5%;
cursor: pointer;
&:hover{
    color: #D41317;
}
`




