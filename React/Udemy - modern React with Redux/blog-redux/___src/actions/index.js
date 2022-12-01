import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POST', payload: response.data });
};

// export const fetchUserMeta = (id) => {
//     return async (dispatch) => {
//         const response = await jsonPlaceholder.get(`/users/${id}`);
//         dispatch({ type: 'FETCH_USER_META', payload: response.data.name });
//     }
// }