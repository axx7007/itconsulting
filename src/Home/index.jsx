import React from "react";
import Header from "../Header";
import Services from "../Services";
import ReadyCard from "../ReadyCard";
import FootMedia from "../FootMedia";
import Footer from "../Footer";
import { Container } from "./style";
const Home = () => {
  return (
    <Container>
      <Header />
      <Services />
      <ReadyCard />
      <FootMedia />
      <Footer />
    </Container>
  );
};
export default Home;
