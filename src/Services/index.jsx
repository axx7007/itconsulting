import React from "react";
import { Container, Learn, Content, Card } from "./style";
import Fade from "react-reveal/Fade";
const Services = () => {
  return (
    <Container>
      <Container.Title>
        <Fade top>Our Services</Fade>
      </Container.Title>
      <Fade left>
        <Container.Text>
          Our Services I'm a paragraph. Click here to add your own text and edit
          me.
          <br /> It’s easy. Just click “Edit Text” or double click me.
        </Container.Text>
      </Fade>
      <Content>
        <Card>
          <Fade top>
            <Card.Title>
              Cloud
              <br /> Solution
            </Card.Title>
            <Card.Text>
              I'm a paragraph. Click
              <br /> here to add your own text
              <br /> and edit me. It’s easy. <br /> Just click “Edit Text” or
              <br /> double click me.
            </Card.Text>
            <Learn>+ Learn More</Learn>
          </Fade>
        </Card>
        <Card>
          <Fade top>
            <Card.Title>
              Managed IT
              <br /> Services
            </Card.Title>
            <Card.Text>
              I'm a paragraph. Click
              <br /> here to add your own text
              <br /> and edit me. It’s easy. <br /> Just click “Edit Text” or
              <br /> double click me.
            </Card.Text>
            <Learn>+ Learn More</Learn>
          </Fade>
        </Card>
        <Card>
          <Fade top>
            <Card.Title>
              Disaster
              <br /> Recovery
            </Card.Title>
            <Card.Text>
              I'm a paragraph. Click
              <br /> here to add your own text
              <br /> and edit me. It’s easy. <br /> Just click “Edit Text” or
              <br /> double click me.
            </Card.Text>
            <Learn>+ Learn More</Learn>
          </Fade>
        </Card>
      </Content>
      <Content>
        <Card>
          <Fade top>
            <Card.Title>
              Cloud
              <br />
              Desktop
            </Card.Title>
            <Card.Text>
              I'm a paragraph. Click
              <br /> here to add your own text
              <br /> and edit me. It’s easy. <br /> Just click “Edit Text” or
              <br /> double click me.
            </Card.Text>
            <Learn>+ Learn More</Learn>
          </Fade>
        </Card>
        <Card>
          <Fade top>
            <Card.Title>
              Network
              <br /> Solutions
            </Card.Title>
            <Card.Text>
              I'm a paragraph. Click
              <br /> here to add your own text
              <br /> and edit me. It’s easy. <br /> Just click “Edit Text” or
              <br /> double click me.
            </Card.Text>
            <Learn>+ Learn More</Learn>
          </Fade>
        </Card>
        <Card>
          <Fade top>
            <Card.Title>
              Support
              <br /> Consulting
            </Card.Title>
            <Card.Text>
              I'm a paragraph. Click
              <br /> here to add your own text
              <br /> and edit me. It’s easy. <br /> Just click “Edit Text” or
              <br /> double click me.
            </Card.Text>
            <Learn>+ Learn More</Learn>
          </Fade>
        </Card>
      </Content>
    </Container>
  );
};
export default Services;
