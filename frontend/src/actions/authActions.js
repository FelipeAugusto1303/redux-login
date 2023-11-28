import { login } from "../services/auth";

export const loginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};

export const logoutRequest = () => {
  return {
    type: "LOGOUT_REQUEST",
  };
};

export const loginSuccess = (userData) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userData,
  };
};

export const loginFailure = (error) => {
  return {
    type: "LOGIN_FAILURE",
    payload: error,
  };
};

export const loginUser = (credentials) => {
  return (dispatch) => {
    dispatch(loginRequest());
    login(credentials)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        dispatch(loginSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginFailure(error.message));
      });
  };
};
