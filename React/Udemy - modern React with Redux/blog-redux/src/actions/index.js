import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsandUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // const uniqUsers = _.uniq(_.map(getState().posts, 'userId'))
  // uniqUsers.forEach(id => dispatch(fetchUserMeta(id)))

  _.chain(getState().posts)
   .map('userId')
   .uniq()
   .forEach(id => dispatch(fetchUserMeta(id)))
   .value();
}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POST', payload: response.data });
};

export const fetchUserMeta = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER_META', payload: response.data });
}