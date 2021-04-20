import React from "react";
import {
  Container,
  InputWrapper,
  TextArea,
  Inputs,
  InputName,
  Input,
  Submit,
} from "./style";

const Footer = (props) => {
  return (
    <Container>
      <Container.Title>Contact Us</Container.Title>
      <Inputs>
        <InputWrapper>
          <InputName>Enter Your Name *</InputName>
          <Input placeholder="Name" />
        </InputWrapper>
        <InputWrapper margin>
          <InputName>Enter Your Email *</InputName>
          <Input placeholder="Email" />
        </InputWrapper>
      </Inputs>
      <InputName margin>Type your Message Here...</InputName>
      <TextArea placeholder="Message" />
      <Submit>Submit</Submit>
      <Inputs>
        <Inputs.Adress>
          Address. 500 Terry Francois Street San Francisco, CA 94158
        </Inputs.Adress>
        <Inputs.Adress>Tel : +998 33 262 7007</Inputs.Adress>
        <Inputs.Adress>Email : infomysite@gmail.com</Inputs.Adress>
      </Inputs>
      <Inputs.Adress>
        & 2023 by ITG. Proudly created with @axx7007
      </Inputs.Adress>
    </Container>
  );
};
export default Footer;
