const MENU_CHANGE = "menu/change";

export const changeMenu = () => {
  return {
    type: MENU_CHANGE,
  };
};

const initialState = false;
const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_CHANGE:
      state = !state;
      return state;
    default:
      return state;
  }
};
export default menuReducer;
