import React from "react";
import Fade from "react-reveal/Fade";

import Footer from "../Footer";
import { whydata } from "../data/whydata";
import {
  Container,
  Main,
  WhyCard,
  Content,
  MiniContent,
  WhyButton,
  MainContent,
} from "./style";
import why from "../assets/why.jpg";
import { Link } from "react-router-dom";
const ChooseHeader = () => {
  return (
    <Container>
      <Main src={why} />
      <Link to="/home">
        <WhyButton>
          <Fade left>Order</Fade>
        </WhyButton>
      </Link>
      <MainContent>
        <WhyCard>
          <WhyCard.Title>
            <Fade left>
              Why Choose
              <br /> ITG. Consulting?
            </Fade>
          </WhyCard.Title>
        </WhyCard>
        <Content>
          {whydata.map((value, index) => {
            return (
              <MiniContent>
                <Fade top cascade>
                  <MiniContent.Title>{value.number}</MiniContent.Title>
                  <MiniContent.Text>{value.text}</MiniContent.Text>
                </Fade>
              </MiniContent>
            );
          })}
        </Content>
      </MainContent>
      <Footer />
    </Container>
  );
};
export default ChooseHeader;
