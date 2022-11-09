import React from 'react';
import SeasonDisplay from './SeassonDisplay';
import Loader from './Loader';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      err: ''
    }

  }

  componentDidMount() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude })
      },
      err => {
        this.setState({ err: err.message })
      }
    )

  }

  render() {

    if (this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
          <div>Pos: {this.state.lat}</div>
        </div>
      )
    }

    if (this.state.err) {
      return (
        <div>Error: {this.state.err}</div>
      )
    }

    return (
      <div><Loader /></div>
    )
  }

}

export default App;
