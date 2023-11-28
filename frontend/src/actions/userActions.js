import { getUserdata } from "../services/user";

export const userRequest = () => {
  return {
    type: "USER_REQUEST",
  };
};

export const userSuccess = (userData) => {
  return {
    type: "USER_SUCCESS",
    payload: userData,
  };
};

export const userFailure = (error) => {
  return {
    type: "USER_FAILURE",
    payload: error,
  };
};

export const getUser = (username) => {
  return (dispatch) => {
    dispatch(userRequest());
    getUserdata(username)
      .then((response) => {
        dispatch(userSuccess(response.data));
      })
      .catch((err) => {
        dispatch(userFailure(err.message));
      });
  };
};
