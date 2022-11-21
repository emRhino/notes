import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 30px;
`

const Input = styled.input`
  padding: 10px;
  width: 100%;
`

class SearchBar extends React.Component {
  constructor(props) {
      super(props);
  
      this.state = { "val": "" };

      this.inputRef = React.createRef();
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.val);
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef.current);
  }


  // TODO użycie w atrybutach wywołania funkcji z () i bez

  render() {
    return (
      <Container>
        <form onSubmit={this.onFormSubmit} >
          <Input ref={this.inputRef} placeholder="Wpisz coś" value={this.state.val} onChange={(e)=> this.setState({ "val": e.target.value})}/>
        </form>
      </Container>
    );
  }
}

export default SearchBar;