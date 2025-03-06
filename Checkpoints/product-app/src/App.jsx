import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const firstName = "fellow human";

function App() {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Image />
                            <Name />
                            <Price />
                            <Description />
                        </Card.Body>
                    </Card>
                    <div className="mt-3 text-center">
                        <h3>
                            {firstName
                                ? `Hello, ${firstName}!`
                                : "Hello, there!"}
                        </h3>
                        {firstName && (
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpu12SUpzPCQrEzsyDgcenYmpgkA0lDWYglg&s"
                                alt="Greeting"
                                style={{
                                    width: "100px",
                                    borderRadius: "50%",
                                    marginTop: "10px",
                                }}
                            />
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
