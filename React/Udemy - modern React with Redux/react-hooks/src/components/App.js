import React from 'react';
import Accordions from './Accordions';
import Search from './Search';
import Dropdown from './Dropdown';
import FilterList from './FilterList';
import Translate from './Translate';

const quiestions = [
  {
      'title': 'Ask 1',
      'answer': 'Answer 1'
  },
  {
      'title': 'Ask 2',
      'answer': 'Answer 2'
  },
  {
      'title': 'Ask 3',
      'answer': 'Answer 3'
  }
]

const options = [
  {
    label: "Color red",
    value: "red"
  },
  {
    label: "Color purple",
    value: "purple"
  },
  {
    label: "Color green",
    value: "green"
  }
]

const list = [
  {
    label: "Harry potter",
    value: "harry-potter",
  },
  {
    label: "LEGO",
    value: "lego",
  },
  {
    label: "Fisher-price",
    value: "fisher-price",
  },
  {
    label: "Cool Club",
    value: "cool-club",
  },
  {
    label: "Smiki",
    value: "smiki",
  },
  {
    label: "V-tech",
    value: "vtech",
  },
  {
    label: "Barbie",
    value: "barbie",
  },
  {
    label: "Hot Wheels",
    value: "hot-wheels",
  },
  {
    label: "Nerf",
    value: "nerf",
  },
  {
    label: "Psi Patrol",
    value: "psi-patrol",
  },
  {
    label: "Rainbow High",
    value: "rainbow-high",
  },
  {
    label: "LEGO Friends",
    value: "lego-friends",
  },
  {
    label: "LEGO City",
    value: "lego-city",
  },
  {
    label: "LEGO Duplo",
    value: "lego-duplo",
  },
  {
    label: "Barbie Dreamtopia",
    value: "barbie-dreamtopia",
  }
]

const langs = [
  {
    label: "Afrikaanas",
    value: "af"
  },
  {
    label: "Arabic",
    value: "ar"
  },
  {
    label: "Hindi",
    value: "hi"
  },
]

function App() {
  return (
    <div className="App">
      <Translate langs={langs} />
    </div>
  );
}

export default App;

// <FilterList list={ list } />
// <Dropdown options={options} heading="Wybierz kolor:">Hello World!</Dropdown>
