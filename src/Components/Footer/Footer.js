import React from 'react';

const Footer = () => {
    return (
        <div>
            <hr />
            <footer style={{paddingRight: '100px', wordWrap: 'break-word', paddingLeft: 5}}>
                <div>
                    <h2>How does React Works?</h2>
                    <h3><strong>Ans:</strong> React is a JavaScript library. That works using JSX (Javascript XML(extensible markup language)). JSX is a combination of Javascript and Html. React use virtual dom. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries. React creates user interfaces (UIs) in a predictable and efficient way using declarative code. virtual dom check the previous
                        condition and check currents condition and and changes where appropriate</h3>
                    <h2>What is the differences between state and props?</h2>
                    <h3><strong>Ans:</strong> Props using take a value from parent component. An example of passing props'propName=propValue'. An example of taking props'prop.propName'.State is declare to set an or multiple value or data in a variable
                        condition and check currents condition and and changes where appropriate</h3>
                    <h2>Can be done without loading the data with the effect?</h2>
                    <h3><strong>Ans:</strong> Use the effect to do more than just load data are:-
                        <ul>
                            <li>Running on state change: validating input field.</li>
                            <li>Running on state change: live filtering.</li>
                            <li>Reading from local storage</li>
                            <li>Running on state change: trigger animation on new array value.</li>
                            <li>Running on props change: update paragraph list on fetched API data update.</li>
                        </ul>
                    </h3>
                </div>
            </footer>
        </div>
    );
};

export default Footer;