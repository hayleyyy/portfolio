import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// React
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import PortfolioExamples from "./PortfolioSection";

function App() {
  return (
    <>
      <header className="header-main">
        <nav className="nav-main">
          <ul>
            <li>port</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </nav>
<motion.div
  initial={{ opacity: 0.1 }}
  whileInView={{ opacity: 0.9 }}
  transition={{ delay: 1, duration: 1 }}
  viewport={{ amount: 0.2 }}
  style={{ mixBlendMode: 'hard-light' }}>

        <h1 className="jumbo">
          <span>let's create</span>
          <span>something</span>
          <span>together</span>
        </h1></motion.div>
      </header>
      <section className="section-intro">
        <Container>
          <Row>
            <Col xs="10" lg="4">
              <div class="intro-text-container">
                <p class="intro-text">
                  I'm Hayley, and I'm a multi-disciplinary web specialist. 
                  I love to create interactive and unique experiences that tell a story.
                </p>
                <div className="hello">hey there!</div>
              </div>
            </Col>
            <Col xs="10" lg="4">
              <p class="intro-text">
                UI and UX design. Graphic design. Interaction design. And from my experience as a front-end developer, I'm confident I can bring these designs to life.
              </p>
            </Col>
            <Col xs="2" lg="4">
            <motion.div
             initial={{ y: 20, opacity: 0.5 }}    // Start off-screen (lower) and transparent
             whileInView={{ y: -20, opacity: 1 }} // Transition to original position and full opacity
             transition={{ duration: 5 }}     // Control the speed of the animation
             viewport={{ once: false }}          // Trigger the animation once when in view
           ><div class="help-you-container">
                <span class="help-you">How can I help you?</span>
              </div></motion.div>
            </Col>
          </Row>
        </Container>
      </section>

<PortfolioExamples></PortfolioExamples>

      <section className="section-process">
        <Container>
          <Row>
            <Col md="2"></Col>
            <Col md="2">Step image</Col>
            <Col md="2">Step image</Col>
            <Col md="2">Step image</Col>
            <Col md="2">Step image</Col>
            <Col md="2">Step image</Col>
          </Row>
        </Container>
      </section>

      <section className="section-about">
        <Container>
          <Row>
            <Col md="8">Some text for the about section.</Col>
            <Col md="4">An image for the about section.</Col>
          </Row>
          <Row>
            <Col sm="6" md="4">
              <img src="./cockatoo.jpg"></img>
              <p>
                Cockatoos are my favourite .. everything. Have you ever seen one{" "}
                <a href="https://www.youtube.com/watch?v=tRsfOGJ5lZg">
                  screaming into a cup?
                </a>{" "}
                (you're welcome.) They're fantastic and everyone should have at
                least 3 or 4.
              </p>
            </Col>
            <Col sm="6" md="4">
              <img src="./clay.jpg"></img>
              <p>
                In my spare time I like to make things out of clay. I started
                with air dry clay and now I use polymer clay, mostly. I'd really
                love to try pottery.
              </p>
            </Col>
            <Col sm="6" md="4">
              An image
            </Col>
            <Col sm="6" md="4">
              An image
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="footer-main">
        <Container>
          <Row>
            <Col sm="6">footer stuff</Col>
            <Col sm="6">footer stuff</Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default App;
