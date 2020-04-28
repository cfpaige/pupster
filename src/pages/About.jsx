import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://www.womensrunning.com/wp-content/uploads/2019/06/shutterstock_721148389-1440x810.jpg">
        {/* <h1>Pupster</h1>
        <h2>Who's a Good Boy?</h2> */}
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Pupster!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>Find Your Perfect Four-Legged Match With Pupster!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;