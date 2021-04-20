import React from "react";
import Back from "../assets/back.jpg";
import { Container, Video } from "./style";
// import { Video } from "../assets/video.mp4";

const FootMedia = () => {
  return (
    <Container src={Back}>
      {/* <Video width="200px" height="200px" autoplay="autoplay" muted loop>
        <source src={Video} type="video/mp4" />
      </Video> */}
    </Container>
  );
};
export default FootMedia;
