import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import banner from '../Images/banner.jpeg';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner-container">
            <Container>
                <Row>
                    <Col sm={8} className="banner-content">
                        <h1>Helping You To Be<br />Chef at Your Own House</h1>
                        <p>Cooking, cookery, or culinary arts is the art, science, and craft of using heat to prepare food for consumption. Cooking techniques and ingredients vary widely, from grilling food over an open fire to using electric stoves, to baking in various types of ovens, reflecting local conditions.</p>
                        <Button variant="primary">Learn more</Button>
                    </Col>
                    <Col sm={4}>
                        {/* <img src={banner} alt="banner" /> */}
                        <Image src={banner} alt="banner" fluid rounded />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;