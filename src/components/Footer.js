import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from "styled-components";

const teamMembers = [
    { name: "Harsh Baraliya", github: "https://github.com/MrCracker-OP" },
    { name: "Khizar Shah", github: "https://github.com/Khizarshah01" },
    { name: "Om Ingle", github: "https://github.com/mr-pros" },
    { name: "Shashwat Agrawal", github: "https://github.com/ShashwatAgrawal20" },
    { name: "Yash Vyavahare", github: "https://github.com/Yashdon999" },
    { name: "TJ Jackson", github: "https://github.com/tjrelly" }
];

const Footer = () => {
    const GoldHoverLink = styled.a`
     &:hover {
       color: #ffc107;
     }
   `;
    return (
        <Container fluid
            className="bg-dark text-light mt-auto w-auto"
            style={{ backgroundColor: "#929fba" }}>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <div className="p-4">
                        <h6 className="text-uppercase mb-3 font-weight-bold">
                            Links
                        </h6>
                        <Row><GoldHoverLink href="!#">Home</GoldHoverLink></Row>
                        <Row><GoldHoverLink href="!#">About</GoldHoverLink></Row>
                        <Row><GoldHoverLink href="!#">Contact</GoldHoverLink></Row>
                        <Row><GoldHoverLink href="!#">Study</GoldHoverLink></Row>
                    </div>
                </Col>
                <Col md="auto">
                    <div className="p-4">
                        <h6 className="text-uppercase mb-3 font-weight-bold">Contact</h6>
                        <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                        <p><i className="fa fa-envelope mr-3"></i> info@gmail.com</p>
                        <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                        <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                    </div>
                </Col>
                <Col md="auto">
                    <div className="p-4">
                        <h6 className="text-uppercase mb-3 font-weight-bold">
                            Contributors
                        </h6>
                        <ul className="list-unstyled justify-content-center justify-content-md-end align-items-center m-0">
                            {teamMembers.map((member, index) => (
                                <li key={index} className="">
                                    <GoldHoverLink
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {member.name}
                                    </GoldHoverLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>
                <Col md="auto">
                    <div className="p-4">
                        <h6 className="text-uppercase mb-3 font-weight-bold">Follow us</h6>

                        {/* <!-- Facebook --> */}
                        <a
                            className="btn btn-primary btn-floating me-1 rounded-circle border-0"
                            style={{ backgroundColor: "#3b5998" }}
                            href="#!"
                            role="button"
                        ><i className="fa fa-facebook-f"></i></a>

                        {/* <!-- Twitter --> */}
                        <a
                            className="btn btn-primary btn-floating m-1 border-0 rounded-circle"
                            style={{ backgroundColor: "#55acee" }}
                            href="#!"
                            role="button"
                        ><i className="fa fa-twitter"></i></a>

                        {/* <!-- Google --> */}
                        <a
                            className="btn btn-primary btn-floating m-1 border-0 rounded-circle"
                            style={{ backgroundColor: "#dd4b39" }}
                            href="#!"
                            role="button"
                        ><i className="fa fa-google"></i></a>

                        {/* <!-- Instagram --> */}
                        <a
                            className="btn btn-primary btn-floating m-1 border-0 rounded-circle"
                            style={{ backgroundColor: "#ac2bac" }}
                            href="#!"
                            role="button"
                        ><i className="fa fa-instagram"></i></a>

                        {/* <!-- Github --> */}
                        <a
                            className="btn btn-primary btn-floating m-1 border-0 rounded-circle"
                            style={{ backgroundColor: "#333333" }}
                            href="#!"
                            role="button"
                        ><i className="fa fa-github"></i></a>

                    </div>
                </Col>
            </Row>
            <Row>
                <div
                    class="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    Copyright © 2023
                </div>
            </Row>
        </Container>

    )
}

export default Footer;