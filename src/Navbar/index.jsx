import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Container, Logo, Menu, ItemWrapper, MenuName } from "./style";
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
          <Logo.Title>PRO-IT</Logo.Title>
        </Logo>
        <ItemWrapper>
          <Fade right>
            <Menu>
              <NavLink
                style={{ marginLeft: "5%" }}
                style={({ textDecoration: "none" }, { marginRight: "5%" })}
                activeStyle={
                  ({ textDecoration: "none" }, { marginRight: "5%" })
                }
                to="/home"
              >
                <MenuName
                  active={this.state.active === "home"}
                  onClick={() => onChange("home")}
                >
                  Home
                </MenuName>
              </NavLink>
              <NavLink
                to="/whychoose"
                style={{ textDecoration: "none" }}
                activeStyle={{ textDecoration: "none" }}
              >
                <MenuName
                  active={this.state.active === "why"}
                  onClick={() => onChange("why")}
                >
                  Why Choose Us
                </MenuName>
              </NavLink>
              <MenuName
                active={this.state.active === "our"}
                onClick={() => onChange("our")}
              >
                <Link
                  activeStyle="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Our Services
                </Link>
              </MenuName>

              <NavLink
                to="/industries"
                style={{ textDecoration: "none" }}
                activeStyle={{ textDecoration: "none" }}
              >
                <MenuName
                  active={this.state.active === "industries"}
                  onClick={() => onChange("industries")}
                >
                  Industries
                </MenuName>
              </NavLink>
              <MenuName
                active={this.state.active === "contact"}
                onClick={() => onChange("contact")}
              >
                <Link
                  spy={true}
                  to="footer"
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact Us
                </Link>
              </MenuName>
            </Menu>
          </Fade>
        </ItemWrapper>
      </Container>
    );
  }
}
export default Navbar;
