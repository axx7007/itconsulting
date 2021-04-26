import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Learn from "../Learn";
import { Container, Header, Content, Card, Button } from "./style";
import { CardData } from "../data/CardData";
import Fade from "react-reveal/Fade";

const Services = () => {
  return (
    <Container id="services">
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
              <NavLink style={{ textDecoration: "none" }} to="/learn">
                <Button>+ Learn More</Button>
              </NavLink>
            </Card>
          );
        })}
      </Content>
    </Container>
  );
};
export default Services;
