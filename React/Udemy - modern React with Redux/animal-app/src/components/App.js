import React, { useState, useEffect } from 'react';
import Animal from './Animal';

const randomAnimal = () => {
  const animal = ['dog', 'cat', 'gator', 'giraffee', 'cow', 'bird'];
  return animal[Math.floor(Math.random() * animal.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, randomAnimal()]);
  }

  const renderAnimals = animals.map((animal, index) => {
      return <Animal type={animal} key={index} />;
    })


  

  return (
    <div className="App">
      <button onClick={handleClick}>Add animal</button>
      { renderAnimals }
    </div>
  );
}

export default App;
