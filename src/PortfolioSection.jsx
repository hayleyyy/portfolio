import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';

const PortfolioSection = ({ children, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.6, // Trigger when 50% of the section is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ height: '400px' }}
      animate={{ height: inView ? '500px' : '400px' }}
      transition={{ duration: 0.5 }}
      className={`example examples-${index}`}
      style={{ overflow: 'hidden', height: '500px' }} // Ensure sections take full screen height
    >
      {children}
    </motion.div>
  );
};

const PortfolioExamples = () => {
  return (
    <section className="section-examples">
      <div className="examples-intro"></div>

      <PortfolioSection index="one">
        <Container>
          <Row>
            <Col md="6" lg="5" xl="4">
              <img className="blob" src="./blobs1.png" alt="Blob 1" />
              <p className="example-description">
                Maybe you want a fun and funky site for your handmade business.
              </p>
            </Col>
            <Col md="6" lg="7" xl="8">
              <img src="./macarons.jpeg" alt="Macarons" />
            </Col>
          </Row>
        </Container>
      </PortfolioSection>

      <PortfolioSection index="two">
        <Container>
          <Row>
            <Col md="6" lg="7" xl="8">
              <img src="./flowers.jpeg" alt="Flowers" />
            </Col>
            <Col md="6" lg="5" xl="4">
              <img className="blob" src="./blobs2.png" alt="Blob 2" />
              <p className="example-description">
                Or maybe you need a more professional look (and some clean branding) for your law firm.
              </p>
            </Col>
          </Row>
        </Container>
      </PortfolioSection>

      <PortfolioSection index="three">
        <Container>
          <Row>
            <Col md="6" lg="5" xl="4">
              <img className="blob" src="./blobs4.png" alt="Blob 4" />
              <p className="example-description">
                Maybe you want your visitors to <i>feel</i> the relaxation you'll provide.
              </p>
            </Col>
            <Col md="6" lg="7" xl="8">
              <img src="./packaging.jpeg" alt="Packaging" />
            </Col>
          </Row>
        </Container>
      </PortfolioSection>

      <PortfolioSection index="four">
        <Container>
          <Row>
            <Col md="6" lg="7" xl="8">
              <img src="./citrus.jpeg" alt="Citrus" />
            </Col>
            <Col md="6" lg="5" xl="4">
              <img className="blob" src="./blobs4.png" alt="Blob 4" />
              <p className="example-description">
                Or be inspired (and called to action) by a wonderful cause.
              </p>
            </Col>
          </Row>
        </Container>
      </PortfolioSection>
    </section>
  );
};

export default PortfolioExamples;
