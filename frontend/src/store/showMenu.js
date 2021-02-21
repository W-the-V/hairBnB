const MENU_CHANGE = "menu/change";

export const changeMenu = () => {
  return {
    type: MENU_CHANGE,
  };
};

const initialState = { open: false };
const menuReducer = (state = initialState, action) => {
  let newState;
  let newStatus = {};
  switch (action.type) {
    case MENU_CHANGE:
      if (state.open) {
        newStatus.open = false;
      } else newStatus.open = true;
      newState = Object.assign({}, state, newStatus);
      return newState;
    default:
      return state;
  }
};
export default menuReducer;
