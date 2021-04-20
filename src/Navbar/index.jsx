import React from "react";
import Fade from "react-reveal/Fade";
import Services from "../Services";

import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams,
} from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Container, Logo, FadeWrapper, Menu, MenuName } from "./style";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "home",
    };
  }
  render() {
    const onChange = (e) => {
      this.setState({
        active: e,
      });
    };
    return (
      <Container>
        <Logo>
          <Logo.Title>ITG</Logo.Title>
        </Logo>
        <FadeWrapper>
          <Fade right>
            <Menu>
              <NavLink activeStyle={{ textDecoration: "none" }} to="/home">
                <MenuName
                  active={this.state.active === "home"}
                  onClick={() => onChange("home")}
                >
                  Home
                </MenuName>
              </NavLink>
              <NavLink to="/whychoose">
                <MenuName
                  active={this.state.active === "why"}
                  onClick={() => onChange("why")}
                >
                  Why Choose Us
                </MenuName>
              </NavLink>

              <NavLink to="/service">
                <MenuName
                  active={this.state.active === "our"}
                  onClick={() => onChange("our")}
                >
                  Our Services
                </MenuName>
              </NavLink>

              <NavLink to="/industries">
                <MenuName
                  active={this.state.active === "industries"}
                  onClick={() => onChange("industries")}
                >
                  Industries
                </MenuName>
              </NavLink>
              <NavLink to="/#contact">
                <MenuName
                  active={this.state.active === "contact"}
                  onClick={() => onChange("contact")}
                >
                  Contact Us
                </MenuName>
              </NavLink>
            </Menu>
          </Fade>
        </FadeWrapper>
      </Container>
    );
  }
}
export default Navbar;
