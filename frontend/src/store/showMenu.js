const MENU_CHANGE = "menu/change";
const DEVELOPER_CHANGE = "developer/change";

export const changeMenu = () => {
  return {
    type: MENU_CHANGE,
  };
};
export const changeDeveloper = () => {
  return {
    type: DEVELOPER_CHANGE,
  };
};

const initialState = { open: false, developer: false };
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
    case DEVELOPER_CHANGE:
      if (state.developer) {
        newStatus.developer = false;
      } else newStatus.developer = true;
      newState = Object.assign({}, state, newStatus);
      return newState;
    default:
      return state;
  }
};
export default menuReducer;
