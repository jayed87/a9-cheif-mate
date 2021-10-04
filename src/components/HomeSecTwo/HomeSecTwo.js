import React, { useEffect, useState } from 'react';
import FishMeal from '../FishMeal/FishMeal';
import { Container } from 'react-bootstrap';

import './HomeSecTwo.css';
const HomeSecTwo = () => {
    const [fishMeal, setFishMeal] = useState([]);
    useEffect(() => {
        fetch('./fishMeals.JSON')
            .then(res => res.json())
            .then(data => setFishMeal(data))
    }, [])
    return (
        <div className="fish-meal-wrapper">
            <div className="sec-two-heading">
                <h2>Lot of Cooking Tips and <br /><span>Cooking Recipes</span></h2>
            </div>
            <Container className="fish-meal-container">
                {
                    fishMeal.map(meal => <FishMeal key={meal.idMeal} meal={meal}></FishMeal>)
                }
            </Container>
        </div>
    );
};

export default HomeSecTwo;