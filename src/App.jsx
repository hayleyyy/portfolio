import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <>
    <header className="header-main">
      <Container>
      <p>here's the header</p>
      </Container>
    </header>
    <section className="intro">
    <Container>
      <p>here's the intro</p>
      </Container>
    </section>

    <section className="section-examples">
      <Container>
        <div className="example examples-intro">
          <p>how can I help you?</p>
        </div>
      </Container>

      <div className="example examples-one">
        <Container>
          <Row>
            <Col md="4">Example 1 text</Col>
            <Col md="8">Example 1 image</Col>
          </Row>
        </Container>
      </div>

      <div className="example examples-two">
        <Container>
          <Row>
            <Col md="8">Example 2 image</Col>
            <Col md="4">Example 2 text</Col>
          </Row>
        </Container>
      </div>

      <div className="example examples-three">
        <Container>
          <Row>
            <Col md="4">Example 3 text</Col>
            <Col md="8">Example 3 image</Col>
          </Row>
        </Container>
      </div>

      <div className="example examples-four">
        <Container>
          <Row>
            <Col md="8">Example 4 image</Col>
            <Col md="4">Example 4 text</Col>
          </Row>
        </Container>
      </div>
    </section>

    <section className="section-process">
      <Container>
        <Row>
          <Col md="2">Step image</Col>
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
          <Col sm="6" md="4">An image</Col>
          <Col sm="6" md="4">An image</Col>
          <Col sm="6" md="4">An image</Col>
          <Col sm="6" md="4">An image</Col>
        </Row>
      </Container>
    </section>
    <footer className="footer-main">
      <Container><Row>
        <Col sm="6">footer stuff</Col>
        <Col sm="6">footer stuff</Col>
        </Row></Container>
    </footer>
    
     
    </>
  )
}

export default App
