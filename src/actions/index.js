/* eslint-disable import/prefer-default-export */
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response });
};

// Note - The two arrow functions denote a function that is returning
// a function. fetchposts is returning anonymous fucntion?
