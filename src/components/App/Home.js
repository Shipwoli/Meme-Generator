import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="text-center">
          <h1>Welcome to Meme Generator</h1>
          <p>Create, share, and enjoy hilarious memes with friends and family.</p>
          <Button variant="primary" size="lg" href="/memes">
            View Memes
          </Button>
        </Col>
        <Col md={6} className="text-center">
          <img
            src="https://freepngimg.com/thumb/categories/1749.png?text=Placeholder+Image"
            alt="Meme Generator"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
