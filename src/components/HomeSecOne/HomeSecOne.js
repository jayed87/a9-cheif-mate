import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import { Col, Container, Image, Row } from 'react-bootstrap';
import './HomeSecOne.css';
import picOne from '../Images/1.jpeg';
import picTwo from '../Images/2.jpeg';

const HomeSecOne = () => {
    const icon = <FontAwesomeIcon className="icon-style" icon={faBook} />

    return (
        <div className="section-one-container">
            <Container>
                <Row>
                    <Col sm={6}>
                        <Row>
                            <Col sm={6}>
                                <Image src={picOne} alt="img" fluid rounded />
                            </Col>
                            <Col sm={6}>
                                <Image src={picTwo} alt="img" fluid rounded />
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={6}>
                        <div className="section-one-right-container">
                            <div>
                                <h3>Learn How To Cook<br /> From <span>Your House</span></h3>
                                <p>
                                    Types of cooking also depend on the skill levels and training of the cooks. Cooking is done both by people in their own dwellings and by professional cooks and chefs in restaurants and other food establishments.
                                </p>
                            </div>
                            <div className="class-type">
                                <div className="class-online">
                                    {icon}
                                    <h5>Online</h5>
                                    <p>Learning with convenients online platform with 24/7 support session</p>
                                </div>
                                <div className="class-offline">
                                    {icon}
                                    <h5>Offline</h5>
                                    <p>Learn with matercheif of all around the world with high class quality learning</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeSecOne;