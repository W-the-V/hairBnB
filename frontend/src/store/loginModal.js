const LOGIN_MODAL_ACTIVE = "loginModal/active";
const LOGIN_MODAL_INACTIVE = "loginModal/inactive";

export const activateLogin = () => {
  return {
    type: LOGIN_MODAL_ACTIVE,
  };
};

export const deactivateLogin = () => {
  return {
    type: LOGIN_MODAL_INACTIVE,
  };
};
const initialState = false;
const loginModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_MODAL_ACTIVE:
      state = true;
      return state;
    case LOGIN_MODAL_INACTIVE:
      state = false;
      return state;
    default:
      return state;
  }
};
export default loginModalReducer;
