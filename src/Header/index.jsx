import React from "react";
import {
  Container,
  LineBottom,
  Picture,
  Line,
  CardWrapper,
  Button2,
  Card,
  Content,
  MiniLine,
  Buttons,
  Button1,
  MobileLogo,
} from "./style";

import MainPicture from "../assets/main.jpg";
import Fade from "react-reveal/Fade";

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Picture src={MainPicture} />
        <Line />
        <MobileLogo>
          <MobileLogo.Title>PRO-IT</MobileLogo.Title>
        </MobileLogo>
        <CardWrapper>
          <Fade left>
            <Card>
              <Card.Title>
                IT Consulting <br /> & Services
              </Card.Title>
              <Content>
                <MiniLine />
                <Content.Text>
                  I'm a paragraph. Click here to add your own text
                  <br /> and edit me. click “Edit Text” or double click me
                  <br /> to add your own content and make changes to the <br />{" "}
                  font. I’m a great place for you to tell a story and
                  <br /> let your users know a little more about you.
                </Content.Text>
              </Content>
            </Card>
          </Fade>
          <Buttons>
            <Button1>+</Button1>
            <Button2>Find out more</Button2>
          </Buttons>
        </CardWrapper>
      </Container>
    );
  }
}
export default Header;
