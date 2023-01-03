import React, { useState } from 'react';

import bird from './bird.svg';
import cat from './cat.svg';
import cow from './cow.svg';
import dog from './dog.svg';
import gator from './gator.svg';
import horse from './horse.svg';
import heart from './heart.svg';

const mapPropToSvg = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

const Animal = ({type}) => {

    const [click, setClick] = useState(0);

    const clickHeart = () => {
        setClick(click + 1)
    }

    return (
        <div style={{ display: 'inline-block', maxWidth: '100px' }}>
            <img style={{ maxWidth: '100%' }} src={ mapPropToSvg[type] } alt="bla" />
            <img onClick={clickHeart} style={{ width: 10 + 10 * click + 'px' }} src={ heart } alt="bla" />
        </div>
    );

}

export default Animal;
