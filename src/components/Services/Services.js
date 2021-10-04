import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Recepies from '../Recepies/Recepies';
import './Services.css';
const Services = () => {
    const [recepies, setRecepie] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
            .then(res => res.json())
            .then(data => setRecepie(data.meals))
    }, [])
    return (
        <div className="course-container">
            <Container>
                <h2> Our <span style={{ color: "#e2874d" }}>Courses</span></h2>
                <Row className="online-container">
                    <Col sm={6} className="online-course-detail">
                        <h4>Online Course</h4>
                        <h6>Price: <span>$250</span></h6>
                    </Col>
                    <Col sm={6} className="online-course-description">
                        <small>1.Recorded Class </small>
                        <small>2.Free books </small>
                        <small>3.Free resources </small><br />
                        <small>4.Any time accessibility </small>
                        <small>5.One to one evaluation </small><br />
                        <small>6.24/7 online support </small>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} className="offline-course-description">
                        <small>1.Live cooking </small>
                        <small>2.Free books </small>
                        <small>3.Free resources </small><br />
                        <small>4.All instruments access </small>
                        <small>5.One to one evaluation </small><br />
                        <small>6.24/7 online support </small>
                    </Col>
                    <Col sm={6} className="offline-course-detail">
                        <h4>Offline Course</h4>
                        <h6>Price: <span>$300</span></h6>
                    </Col>
                </Row>
            </Container>
            <Container className="meal-container">
                <div className="meal-heading">
                    <h1>Recepie <span style={{ color: "#e2874d" }}>Category</span></h1>
                    <p>Some of our famous Chicken Recepies. Have a look!!!!</p>
                </div>
                <div className="recepie-category">
                    {
                        recepies.map(recepie => <Recepies key={recepie.idMeal} recepie={recepie}></Recepies>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;