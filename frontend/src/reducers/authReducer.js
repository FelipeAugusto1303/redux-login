const initialState = {
  credentials: {},
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        credentials: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        credentials: {},
        loading: false,
        error: action.payload,
      };
    case "LOGOUT_REQUEST":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
