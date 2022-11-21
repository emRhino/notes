
import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const Wrapper = styled.div`
  background: papayawhip;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`

class App extends React.Component {

  state = { images: [] }

  onSearchSubmit = async (terms) => {
    const response = await unsplash.get('https://api.unsplash.com/search/photos', {
      params: { query: terms }
    })

    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <Wrapper>
        <Reset />
        <GlobalStyle />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </Wrapper>
    )
  }
}

export default App;