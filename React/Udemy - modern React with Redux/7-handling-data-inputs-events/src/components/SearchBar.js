import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
      super(props);
  
      this.state = { "val": "" };
  }

  render() {
    return (
      <div className="search-bar">
        <form>
          <input placeholder="Wpisz coś" value={this.state.val} onChange={(e)=> this.setState({ "val": e.target.value})}/>
        </form>
      </div>
    );
  }
}

export default SearchBar;