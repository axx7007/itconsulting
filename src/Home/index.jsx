import React from "react";
import Header from "../Header";
import Services from "../Services";
import ReadyCard from "../ReadyCard";
import FootMedia from "../FootMedia";
import Carousel from "../Carousel";
import Footer from "../Footer";
import { Container } from "./style";
const Home = () => {
  return (
    <Container id="home">
      <Header />
      <Services id="services" />
      <Carousel />
      <ReadyCard />
      <FootMedia />
      <Footer id="contact" />
    </Container>
  );
};
export default Home;
