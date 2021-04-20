import React from "react";
import {
  Container,
  FacebookIcon,
  Message,
  ItemWrapper,
  TwitterLogo,
  In,
} from "./style";
const Social = () => {
  return (
    <Container>
      <FacebookIcon />
      <TwitterLogo />
      <In />
      <ItemWrapper>
        <Message />
      </ItemWrapper>
    </Container>
  );
};
export default Social;
