/* eslint-disable import/prefer-default-export */
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Need to put await keyword in again for fetchPost. As we'll wait for
// fetchPosts to come back to us with data until moving forward.
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

/* Optional chain refactor using lodash - See lesson 194 in Modern React for details
_.chain(getState().posts)
  .map('userId')
  .uniq()
  .forEach(id => dispatch(fetchUser(id)))
  .value()
*/

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// Note - The two arrow functions denote a function that is returning
// a function. fetchposts is returning anonymous fucntion?
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

/* Memoization option. Not my preferred method.
export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
});
*/
