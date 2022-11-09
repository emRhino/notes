import React from 'react';

class Loader extends React.Component {
    render() {
        return (
            <div style={{position: 'absolute', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                Loading
            </div>
        )
    }
}

export default Loader;