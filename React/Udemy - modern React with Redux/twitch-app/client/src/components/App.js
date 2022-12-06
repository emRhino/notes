import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamNew from './streams/StreamNew';
import StreamShow from './streams/StreamShow';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={StreamList} />
      <Route exact path="/stream/new" component={StreamNew} />
      <Route exact path="/stream/show" component={StreamShow} />
      <Route exact path="/stream/edit/" component={StreamEdit} />
      <Route exact path="/stream/delete/" component={StreamDelete} />
    </BrowserRouter>
  );
}

export default App;
