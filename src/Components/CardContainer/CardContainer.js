import React, { useEffect, useState } from 'react';
import './CardContainer.css'
import Card from '../Card/Card';

const CardContainer = () => {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    return (
        <div>
            <h2>Select today's exercise</h2>
            <div className="card-container">
                <div className='cards'>
                    {
                        exercises.map(exercise => <Card exercise={exercise} key={exercise.id}></Card>)
                    }
                </div>
                <div className='calculate'>

                </div>
            </div>
        </div>
    );
};

export default CardContainer;