import React, { useState } from 'react';
import Animal from './Animal';

const randomAnimal = () => {
  const animal = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
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
      <br />
      { renderAnimals }
    </div>
  );
}

export default App;
