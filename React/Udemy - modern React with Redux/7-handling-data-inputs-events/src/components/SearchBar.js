import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
      super(props);
  
      this.state = { "val": "" };
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.val);
  }

  // TODO użycie w atrybutach wywołania funkcji z () i bez

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit} >
          <input placeholder="Wpisz coś" value={this.state.val} onChange={(e)=> this.setState({ "val": e.target.value})}/>
        </form>
      </div>
    );
  }
}

export default SearchBar;