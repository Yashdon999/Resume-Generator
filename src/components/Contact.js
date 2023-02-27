import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledForm = styled(Form)`
  background-color: #9fbcbf9e;
  /* border-radius: 10px; */
  font-family: Garamond, serif;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  height: 90vh;
  width: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 2rem;
  margin-top: 40px;
  margin-left: 35px;
  margin-bottom: 35px;
  /* box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.22), 1px 0px 0px 0px rgba(0,0,0,0.22), 1px 2px 0px 0px rgba(0,0,0,0.22), 2px 1px 0px 0px rgba(0,0,0,0.22), 2px 3px 0px 0px rgba(0,0,0,0.22), 3px 2px 0px 0px rgba(0,0,0,0.22), 3px 4px 0px 0px rgba(0,0,0,0.22), 4px 3px 0px 0px rgba(0,0,0,0.22), 4px 5px 0px 0px rgba(0,0,0,0.22), 5px 4px 0px 0px rgba(0,0,0,0.22), 5px 6px 0px 0px rgba(0,0,0,0.22), 6px 5px 0px 0px rgba(0,0,0,0.22), 6px 7px 0px 0px rgba(0,0,0,0.22), 7px 6px 0px 0px rgba(0,0,0,0.22), 7px 8px 0px 0px rgba(0,0,0,0.22), 8px 7px 0px 0px rgba(0,0,0,0.22); */

  input[type="text"],
  input[type="email"],
  textarea {
    border: 2px solid grey;
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }

  input[type="text"]:first-of-type {
    margin-top: 1rem;
  }

  @media (max-width: 767px) {
    /* styles for screens with a maximum width of 767 pixels */
    height: auto;
    width: 100%;
    margin: 0;

    input[type="text"],
    input[type="email"],
    textarea {
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }

    input[type="text"]:first-of-type {
      margin-top: 0.5rem;
    }
  }
`;

const StyledButton = styled(Button)`
  background-color: grey;
  // box-shadow: 1px 2px 14px 0px black;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 1rem 0;
  border: none;

  &:hover {
    background-color: black;
    /* border-color: #023e8a; */
  }

  @media (max-width: 767px) {
    /* adjust button styling for mobile screens */
    margin: 1rem auto;
    width: 100%;
  }
`;

const StyledSection = styled.section`
  background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.meQJ91pe0O1iqNXponnaxAHaEK%26pid%3DApi&f=1&ipt=defe23f251047203dc4a08bfd218744b5f5e92d89fff8e92f18eba786bcbc068&ipo=images");
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  /* background-color: #00203FFF; */
`;

const Contact = () => {
  return (
    <StyledSection id="contact">
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
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                />
              </Form.Group>
              <StyledButton type="submit" block>
                Send Message
              </StyledButton>
            </StyledForm>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default Contact;
