import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import { Button } from "@mui/material";
import Type from "./Type";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import moon from "../../Images/moon2.png";
import { FaArrowCircleUp } from "react-icons/fa";

function Home() {
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    if (scrollTop > windowHeight * 0.5) {
      setShowScrollIcon(true);
    } else {
      setShowScrollIcon(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <div className="background-container">
        <img src={moon} alt="" />
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>

      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SAI CHARAN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />

                <div className="buttons-container">
                <Nav.Link href="/login">

<Button
 type="submit"
 size="medium"
 color="primary"
 variant="outlined"
 variants={variants}
 whileHover="hover"
 whileTap="tap"
 sx={{  marginTop: 2, borderRadius: 4 }}
 style={{  fontSize: '17px',color: 'white', backgroundColor: '#545454', fontFamily: 'Poppins, sans-serif' }}
>
<span style={{ textTransform: 'capitalize' }}>Start Your Analysis</span>
</Button>
</Nav.Link>

                  <div class="home-hero__mouse-scroll-cont">
                    <div class="mouse"></div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {showScrollIcon && (
        <div className="scroll-icon" onClick={scrollToTop}>
          <FaArrowCircleUp className="scroll-icon__icon" />
        </div>
      )}
    </section>
  );
}

export default Home;
