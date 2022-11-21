import React, { useState, useEffect, useRef } from 'react';

const Dropdown = (props) => {
    const [option, setOption] = useState(props.options[0]);
    const [color, setColor] = useState(option.value);

    const selectEl = useRef('');

    const chooseOption = (e) => {
        setOption(e.target.value);
    }

    useEffect(()=> {
        setColor(option)
    }, [option])

    const renderDropdown = props.options.map((option) => {
        return (
            <option ref={selectEl} key={ option.value } value={ option.value }>{ option.label }</option>
        )
    });

    return (
        <div>
            <h2><label>{ props.heading }</label></h2>
            <select value={color} onChange={(e)=>{chooseOption(e)}}>
                { renderDropdown }
            </select>
            
            <h1 style={{color: `${color}`}}>{ props.children }</h1>
        </div>
    )
}

export default Dropdown;