const userMetaReducer = (state = '', action) => {
    switch (action.type) {

        case 'FETCH_USER_META':
            return [action.payload]

        default:
            return state
    }
}

export default userMetaReducer;