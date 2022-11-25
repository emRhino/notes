import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({song}) => {

    if (!song) { return }

    return (
        <div>
            <h1>{ song.title } długość: { song.duration }</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails);