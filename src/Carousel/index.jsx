import React from "react";
import { Container, Author } from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Reveal from "react-reveal/Reveal";
const CarouselContainer = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={1000}
    >
      <Container>
        <Reveal effect="fadeInUp">
          <Container.Title>Testimonials</Container.Title>
          <Container.Text>
            “I'm a testimonial. Click to edit me and
            <br /> add text that says something nice about
            <br /> you and your services.”
          </Container.Text>
          <Author>
            Jason Strauss
            <br /> CEO of ML Associates
          </Author>
        </Reveal>
      </Container>
      <Container>
        <Reveal effect="fadeInUp">
          <Container.Title>Testimonials</Container.Title>
          <Container.Text>
            “I'm a testimonial. Click to edit me and
            <br /> add text that says something nice about
            <br /> you and your services.”
          </Container.Text>
          <Author>
            Jason Strauss
            <br /> CEO of ML Associates
          </Author>
        </Reveal>
      </Container>
      <Container>
        <Reveal effect="fadeInUp">
          <Container.Title>Testimonials</Container.Title>
          <Container.Text>
            “I'm a testimonial. Click to edit me and
            <br /> add text that says something nice about
            <br /> you and your services.”
          </Container.Text>
          <Author>
            Jason Strauss
            <br /> CEO of ML Associates
          </Author>
        </Reveal>
      </Container>
    </Carousel>
  );
};
export default CarouselContainer;
