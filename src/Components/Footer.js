import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
export const Footer = () => {
  return (
    <>
        <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col>
            <h3>Footer Content</h3>
            <p>Put your footer content here.</p>
          </Col>
          <Col>
            <h3>Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col>
            <h3>Contact Us</h3>
            <p>Email: example@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  )
}
