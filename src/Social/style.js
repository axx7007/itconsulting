import { FacebookF } from "@styled-icons/fa-brands/FacebookF"
import { Twitter } from "@styled-icons/bootstrap/Twitter"
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin"
import { MessageRoundedDots } from '@styled-icons/boxicons-solid/MessageRoundedDots'

import styled from 'styled-components'

export const Container = styled.div`
display: flex;
position: fixed;
flex-direction: column;
width: 50px;
height: fit-content;
align-items: center;
margin-left: 1450px;
z-index: 3;
margin-top: 320px;
`

export const Facebook = styled(FacebookF)`
width: 20px;
height: 20px;
cursor: pointer;
`
export const TwitterLogo = styled(Twitter)`
width: 20px;
height: 20px;
margin-top: 25px;
cursor: pointer;
`
export const In = styled(Linkedin)`
width: 20px;
margin-top: 25px;
height: 20px;
cursor: pointer;
`
export const ItemWrapper = styled.div`
width: 70px;
display: flex;
align-items: center;
justify-content: center;
height: 70px;
border-radius: 70px;
background-color: #1A2B6D;
margin-top: 200px;
`
export const Message = styled(MessageRoundedDots)`
width: 35px;
height: 35px;
color: white;
cursor: pointer;
`