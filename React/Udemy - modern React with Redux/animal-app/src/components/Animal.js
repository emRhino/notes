import React from 'react';

import bird from './bird.svg';
import cat from './cat.svg';
import cow from './cow.svg';
import dog from './dog.svg';
import gator from './gator.svg';
import horse from './horse.svg';

const mapPropToSvg = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

const Animal = ({type}) => {
    return (
        <div style={{ display: 'inline-block', maxWidth: '100px' }}>
            <img style={{ maxWidth: '100%' }} src={ mapPropToSvg[type] } alt="bla" />
        </div>
    );

}

export default Animal;
