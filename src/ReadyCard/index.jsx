import React from "react";
import {
  Container,
  TopLine,
  Line,
  CardWrapper,
  Buttons,
  Button1,
  Button2,
  CardContent,
  CardLine,
  Card,
} from "./style";

class ReadyCard extends React.Component {
  render() {
    return (
      <Container>
        <Line />
        <CardWrapper>
          <Card>
            <Card.Title>Ready to find out more?</Card.Title>
            <CardContent>
              <CardLine />

              <Card.Text>
                I'm a paragraph. Click here to add your own text and edit me.
                <br />
                click “Edit Text” or double click me to add your own content
                <br />
                and make changes to the font. I’m a great place for you to tell
                <br />a story and let your users know a little more about you.
              </Card.Text>
            </CardContent>
          </Card>
          <Buttons>
            <Button1>+</Button1>
            <Button2>Ger free evaluation</Button2>
          </Buttons>
        </CardWrapper>
      </Container>
    );
  }
}
export default ReadyCard;
