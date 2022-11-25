import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'Czekam na znak', duration: '2:83' },
        { title: 'The Bad Touch', duration: '3:43' },
        { title: 'Nic dwa razy (W. Szymborska)', duration: '3:37' },
        { title: 'Call It Love', duration: '2:57' },
        { title: 'Still (I Got Summer On My Mind) (FORTELLA remix)', duration: '2:22' },
        { title: 'To co masz Ty!', duration: '4:03' }
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})