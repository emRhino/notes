import React from 'react';

const Animal = ({type}) => {
    console.log(type);
    const chooseAnimal = () => {
        switch (type) {
            case 'dog':
                return 'rdoooogew';
                break;
            case 'cat':
                return 'caaaat';
                break;
            default:
                return 'blaa';
                break;
        }
    }
    return (
        <div>
            { chooseAnimal() }
        </div>
    );

}

export default Animal;
