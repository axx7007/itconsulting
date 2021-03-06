import React from "react";
import Fade from "react-reveal/Fade";
import industries from "../assets/industries.jpg";
import Footer from "../Footer";
import { whydata } from "../data/whydata";
import { industry } from "../data/industry";
import {
  Container,
  Main,
  WhyCard,
  Content,
  MiniContent,
  MainContent,
} from "./style";
import why from "../assets/why.jpg";
const Industries = () => {
  return (
    <Container id="industries">
      <Main src={industries} />
      <MainContent>
        <WhyCard>
          <WhyCard.Title>
            <Fade left>
              IT Solutions
              <br />
              for Your Industry
            </Fade>
          </WhyCard.Title>
        </WhyCard>
        <Content>
          {industry.map((value, index) => {
            return (
              <MiniContent>
                <Fade top cascade>
                  <MiniContent.Title>{value.title}</MiniContent.Title>
                  <MiniContent.Text>{value.text}</MiniContent.Text>
                </Fade>
              </MiniContent>
            );
          })}
        </Content>
      </MainContent>
      <Footer why />
    </Container>
  );
};
export default Industries;
