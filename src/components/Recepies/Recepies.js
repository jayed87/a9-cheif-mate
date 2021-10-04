import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Recepies.css';
const Recepies = (props) => {
    const { strMealThumb, strMeal, strInstructions, strCategory, strArea } = props.recepie;
    return (
        <div>
            <div className="sec-two-card">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            <p>{strInstructions.slice(0, 100)}</p>
                            <p>Category: <span style={{ color: "#e2874d" }}>{strCategory} </span>Area: <span style={{ color: "#e2874d" }}>{strArea}</span></p>
                        </Card.Text>
                        <Button variant="primary">See Detail</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Recepies;