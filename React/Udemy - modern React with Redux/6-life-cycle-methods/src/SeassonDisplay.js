import React from 'react';

class SeasonDisplay extends React.Component {
    constructor(props) {
        super(props);
        // const state = {};
    }

    render() {
        return (
            <div>Hello: {this.props.lat}</div>
        )
    }
}

export default SeasonDisplay;