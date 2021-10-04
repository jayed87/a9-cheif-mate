import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import m1 from '../Images/m1.jpg';
import m2 from '../Images/m2.jpeg';
import m3 from '../Images/m3.jpeg';
import './About.css';
const About = () => {
    return (
        <div className="mentor-container">
            <h2>Our Expert <span style={{ color: "#e2874d" }}>Mentor</span></h2>
            <Container>
                <Row>
                    <Col sm={4}>
                        <Image src={m1} alt="mentor" fluid />
                        <h2>John H Smith</h2>
                    </Col>
                    <Col sm={4}>
                        <Image src={m2} alt="mentor" fluid />
                        <h2>Hanna Bruce</h2>
                    </Col>
                    <Col sm={4}>
                        <Image src={m3} alt="mentor" fluid />
                        <h2>Micheal Kennedy</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;