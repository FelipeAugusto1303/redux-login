const initialState = {
  user: {},
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case "USER_FAILURE":
      return {
        ...state,
        user: {},
        loading: false,
        error: action.paylod,
      };
    default:
      return state;
  }
};

export default userReducer;
