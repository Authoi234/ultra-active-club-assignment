import React, { useEffect, useState } from 'react';
import myImg from '../../images/authoi.png.png'
import './CardContainer.css'
import Card from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const CardContainer = () => {
    const [exercises, setExercises] = useState([]);
    const [exerciseTime, setExerciseTime] = useState(0);
    const [exerciseBreak, setExerciseBreak] = useState(0);

    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    const handler = (time) => {
        let newTime = exerciseTime + parseInt(time)
        setExerciseTime(newTime);
    }

    const addToDb = (item) => {
        localStorage.setItem('breakTimeNum', JSON.stringify(item));
    }

    const breakNum = (e) => {
        setExerciseBreak(parseInt(e.target.innerText));
        addToDb(exerciseBreak)
    }

    return (
        <div className='bg-top'>
            <h2>Select today's exercise</h2>
            <div className='card-container'>
                <div>
                    <div className='cards'>
                        {
                            exercises.map(exercise => <Card exercise={exercise} key={exercise.id} handler={handler}></Card>)
                        }
                    </div>
                </div>
                <div className='calculate'>
                    <div className='d-flex padding'>
                        <img className='myImg' src={myImg} alt="" />
                        <div>
                            <p><strong>Jawad Jabbar Khan Authoi</strong></p>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span><strong>Brahmanbaria, Bangladesh</strong></span>
                            </div>
                        </div>
                    </div>
                    <div className='information'>
                        <span>4F 10.6in <p>Height</p></span>
                        <span>35Kg <p>Weight</p></span>
                        <span>12<p>Years</p> </span>
                    </div>
                    <div className='break'>
                        <h3>Add A Break</h3>
                        <div className='break-container'>
                            <div><span onClick={breakNum}>10</span><span>s</span></div><div><span onClick={breakNum}>20</span><span>s</span></div><div><span onClick={breakNum}>30</span><span>s</span></div><div><span onClick={breakNum}>40</span><span>s</span></div>
                        </div>
                    </div>
                    <div className='details'>
                        <h3>Exercise Details</h3>
                        <div className='details-container'>
                            <div><h5>Exercise time</h5> <p className='para-style'>{exerciseTime}s</p></div>
                            <div><h5>Break time</h5> <p className='para-style'>{JSON.parse(localStorage.getItem('breakTimeNum'))}s</p></div>
                        </div>
                    </div>
                    <button className='completed-btn'>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default CardContainer;