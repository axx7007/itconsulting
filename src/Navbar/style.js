import styled from 'styled-components'

export const Container = styled.div`
display: flex;
position:relative;
width: 80%;
height: 128px;
align-items: center;
justify-content: space-between;
padding-left: 50px;
margin-right: auto;
`
export const Logo = styled.div`
width: 97px !important;
position: fixed;
z-index: 3;
height: 63px;
cursor: pointer;
border: 5px solid #1A2B6D;
&:hover{
    border: 5px solid #D41317;
    color: #D41317;
}

`
Logo.Title = styled.h1`
font-size: 26px;
color:#1A2B6D;
font-weight: 900;
font-family: Arial;
font-weight: 900;
line-height: 63px;
margin: 0;
padding: 0;
padding: 0px 23px;
&:hover{
    color: #D41317;
}
`
export const Menu = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: auto;
`
export const MenuName = styled.a`
display: flex;
justify-content: center;
width: 148px;
height: 50px;
line-height: 50px;
align-items: center;
margin: auto;
font-family: Arial, Helvetica, sans-serif;
font-weight: 900;
font-size: 16px;
color:${({ active }) => active ? "#D41317" : "#1A2B6D"};
padding: 0px 10px;
cursor: pointer;
&:hover{
    color: #D41317;
}
`


export const FadeWrapper = styled.div`
display: flex;
margin-left: auto;
`

