import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Accordions = ({quiestions}) => {

    const [activeQuestion, setActiveQuestion] = useState(null);

    useEffect(() => {
        console.log('fire');
    }, []);

    const toogle = (index) => {
        setActiveQuestion(index)
    }

    const renderItems = quiestions.map((question, index) => {

        const active = activeQuestion === index ? 'active' : '';

        return (
            <div className={ active } key={ question.title }>
                <h2 onClick={() => toogle(index) }>{ question.title }</h2>
                <p>{ question.answer }</p>
             </div>
        )

    })

    return (
        <div>{ renderItems }</div>
    )

}

export default Accordions;