import React from "react";
import {
  Container,
  InputWrapper,
  TextArea,
  Inputs,
  InputName,
  Input,
  Submit,
  SubmitWrapper,
} from "./style";

const Footer = (props) => {
  return (
    <Container id="footer">
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
      <InputWrapper>
        <Inputs text={true}>
          <InputName margin>Type your Message Here...</InputName>
          <TextArea placeholder="Message" />
          <SubmitWrapper>
            <Submit>Submit</Submit>
          </SubmitWrapper>
        </Inputs>
      </InputWrapper>
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
