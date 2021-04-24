import React from "react";
import { Container, AntCarousel, Header, Content, Card, Button } from "./style";
import { CardData } from "../data/CardData";
import Fade from "react-reveal/Fade";

const Services = () => {
  return (
    <Container>
      <Header>
        <Container.Title>
          <Fade top>Our Services</Fade>
        </Container.Title>
        <Fade left>
          <Container.Text>
            Our Services I'm a paragraph. Click here to add your own text and
            edit me.
            <br /> It’s easy. Just click “Edit Text” or double click me.
          </Container.Text>
        </Fade>
      </Header>
      <Content>
        {CardData.map((value, index) => {
          return (
            <Card>
              <Fade top>
                <Card.Title>{value.title}</Card.Title>
                <Card.Text>{value.text}</Card.Text>
              </Fade>
              <Button>+ Learn More</Button>
            </Card>
          );
        })}
      </Content>
    </Container>
  );
};
export default Services;
