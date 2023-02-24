import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 2rem;

`;

const StyledButton = styled(Button)`
  background-color: #1abc9c;
  border-color: #1abc9c;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 1rem;
  &:hover {
    background-color: #16a085;
    border-color: #16a085;
  }
`;

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <StyledForm>
              <h2 className="text-center mt-4 fs-2 fw-bold">Get in Touch</h2>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" />
              </Form.Group>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
              </Form.Group>
              <StyledButton type="submit" block>
                Send Message
              </StyledButton>
            </StyledForm>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

