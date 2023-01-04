import React from "react";
import { Carousel } from "react-bootstrap";
import Footer from "./Footer";
import NavBar from "./NavBar";

/**
 * NOTE: As your wrongly using image src, I have added a sample image and replaced your "Bkg.jpg", "bkg2.jpg" and "bkg3.jpg" with {sampleImage}
 */
import sampleImage from "../assets/Images/sample.jpg";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Carousel fade interval={1000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sampleImage}
            alt="First slide"
            width="1240"
            height="600"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sampleImage}
            alt="Second slide"
            width="1240"
            height="600"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sampleImage}
            alt="Third slide"
            width="1240"
            height="600"
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <div>
        <h1 style={{ textAlign: "center", fontFamily: "-moz-initial" }}>
          <b>Services</b>
        </h1>
        <br />
      </div>

      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
