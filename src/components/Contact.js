import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const StyledButton = styled(Button)`
  background-color: #007bff;
  border-color: #007bff;
  margin-top: 1rem;
  &:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }
`;

function Contact() {
  return (
    <Container className="my-5 h-100" >
      <StyledForm>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>

        <StyledButton type="submit">
          Submit
        </StyledButton>
      </StyledForm>
    </Container>
  );
}

export default Contact;