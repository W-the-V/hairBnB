const SIGNUP_MODAL_ACTIVE = "signUpModal/active";
const SIGNUP_MODAL_INACTIVE = "signUpModal/inactive";

export const activateSignUp = () => {
  return {
    type: SIGNUP_MODAL_ACTIVE,
  };
};

export const deactivateSignUp = () => {
  return {
    type: SIGNUP_MODAL_INACTIVE,
  };
};
const initialState = false;
const signUpModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_MODAL_ACTIVE:
      state = true;
      return state;
    case SIGNUP_MODAL_INACTIVE:
      state = false;
      return state;
    default:
      return state;
  }
};
export default signUpModalReducer;
