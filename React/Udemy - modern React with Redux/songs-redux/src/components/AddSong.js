import React from 'react';
import { connect } from 'react-redux';

const AddSong = (props) => {
    console.log(props)

    return (
        <div>
            <input />
            <input />
            <button>Dodaj</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return { add: state.addSong }
}

export default connect(mapStateToProps)(AddSong);