import React from 'react';
import SongDetails from './SongDetails';
import SongList from './SongList';

// import { selectSong } from '../actions';


function App() {
  return (
    <div className="App">
      <SongList />
      <SongDetails />
    </div>
  );
}

export default App;
