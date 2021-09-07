export const initialState = {
  user: "",
  token: "",
  loading: false,
  error: null,
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.accessToken,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        user: "",
        token: "",
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};
