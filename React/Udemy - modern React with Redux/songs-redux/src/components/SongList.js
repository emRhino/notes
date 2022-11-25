import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongList = (props) => {

    const selectThisSong = (song) => {
        props.selectSong(song);
    }

    const renderList = (props) => {

        const songsRenderDivs = props.songs.map((song) => {
            return (
                <div style={{display: "flex", marginBotton: "10px", padding: "10px 0", borderBottom: "1px solid grey"}} key={ song.title }>
                    <div>{ song.title }</div>
                    <button onClick={()=>{selectThisSong(song)}}>Select</button>
                </div>
            )
        })

        return songsRenderDivs;
    }

    return (
        <div>
            { renderList(props) }
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return { songs: state.songs};
}

export default connect(mapStateToProps, { selectSong })(SongList);