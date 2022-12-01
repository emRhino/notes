import { combineReducers } from 'redux';

const blogpostReducers = () => {
    return [
        { title: 'bla', desc: 'opis test', author: 'John Doe' }
    ]
}

export default combineReducers({
    blogpost: blogpostReducers
})