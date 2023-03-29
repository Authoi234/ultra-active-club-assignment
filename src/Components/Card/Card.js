import React from 'react';
import './Card.css'

const Card = ({exercise, handler}) => {
    let select = 'Add To List';
    return (
        <div className='card'>
            <img className='w-100' src={exercise.img} alt="" />
            <div>
                <h2>{exercise.name}</h2>
                <p>{exercise.about}</p>
                <h4>For age: {exercise.age}</h4>
                <h4>Time required: {exercise.time}s</h4>
                <button className='btn-select' onClick={() => {handler(exercise.time)}}>{select}</button>
            </div>
        </div>
    );
};

export default Card;