import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

        <h1 className="jumbo">
          <span>let's create</span>
          <span>something</span>
          <span>together</span>
        </h1>
      </header>
      <section className="section-intro">
        <Container>
          <Row>
            <Col lg="4">
              <div class="intro-text-container">
                <p class="intro-text">
                  Nausicaä glided over the Sea of Corruption, her hands gently
                  guiding the glider through the winds, as the Ohmu watched from
                  below. Beneath her, the forest breathed with ancient wisdom, a
                  quiet hum that only the old souls could hear. Totoro sat
                  beneath the great camphor tree, his soft belly rising and
                  falling with each deep breath.
                </p>
                <div className="hello">hey there!</div>
              </div>
            </Col>
            <Col lg="4">
              <p class="intro-text">
                The Catbus purred as it rested beside him, its wide eyes
                blinking slowly as it awaited the next call. The wind blew
                through the leaves, carrying the faint sound of laughter from
                the children who had long since drifted to sleep. Everything was
                calm, as if the world outside was but a dream.
              </p>
            </Col>
            <Col lg="4">
              <div class="help-you-container">
                <span class="help-you">How can I help you?</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-examples">
        <div className="examples-intro"></div>

        <div className="example examples-one">
          <Container>
            <Row>
              <Col md="4">
                <img className="blob" src="./blobs1.png"></img>
                <p className="example-description">
                  Nausicaä glided over the Sea of Corruption, her hands gently
                  guiding the glider through the winds.
                </p>
              </Col>
              <Col md="8">
                <img src="./macarons.jpeg"></img>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="example examples-two">
          <Container>
            <Row>
              <Col md="8">
                <img src="./flowers.jpeg"></img>
              </Col>
              <Col md="4">
                <img className="blob" src="./blobs2.png"></img>
                <p className="example-description">
                  Nausicaä glided over the Sea of Corruption, her hands gently
                  guiding the glider through the winds.
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="example examples-three">
          <Container>
            <Row>
              <Col md="4">
                <img className="blob" src="./blobs4.png"></img>
                <p className="example-description">
                  Nausicaä glided over the Sea of Corruption, her hands gently
                  guiding the glider through the winds.
                </p>
              </Col>
              <Col md="8">
                {" "}
                <img src="./packaging.jpeg"></img>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="example examples-four">
          <Container>
            <Row>
              <Col md="8">
                {" "}
                <img src="./citrus.jpeg"></img>
              </Col>
              <Col md="4">
                <img className="blob" src="./blobs4.png"></img>
                <p className="example-description">
                  Nausicaä glided over the Sea of Corruption, her hands gently
                  guiding the glider through the winds.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

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
