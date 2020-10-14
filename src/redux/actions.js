export const USERNAME = 'USERNAME';

export const saveUserName = (dispatch, userName) => {
  dispatch({type: USERNAME, data: userName});
};
