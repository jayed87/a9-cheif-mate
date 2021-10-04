import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './FishMeal.css';
const FishMeal = (props) => {
    const { strMealThumb, strMeal, strInstructions } = props.meal;
    return (
        <div className="sec-two-card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 100)}
                    </Card.Text>
                    <Button variant="primary">See Detail</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FishMeal;