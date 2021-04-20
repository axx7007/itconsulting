import React from 'react'
import {Container, Facebook, Message, ItemWrapper, TwitterLogo, In} from './style'
const Social=()=>{
    return(
        <Container> 
            <Facebook />
            <TwitterLogo />
            <In />
            <ItemWrapper>
                <Message />
            </ItemWrapper>

        </Container>

    )
}
export default Social