import React from 'react';

import bird from './bird.svg';
import cat from './cat.svg';
import cow from './cow.svg';
import dog from './dog.svg';
import gator from './gator.svg';
import heart from './heart.svg';
import horse from './horse.svg';

const Animal = ({type}) => {
    return (
        <div>
            <img src={ type } />
        </div>
    );

}

export default Animal;
