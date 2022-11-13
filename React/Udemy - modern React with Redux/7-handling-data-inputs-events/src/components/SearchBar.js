import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
      super(props);
  
  }
  render() {
    return (
      <div className="search-bar">
        <form>
          <input placeholder="Wpisz coś" />
        </form>
      </div>
    );
  }
}

export default SearchBar;