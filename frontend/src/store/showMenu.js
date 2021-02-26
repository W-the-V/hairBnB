const MENU_CHANGE = "menu/change";
const DEVELOPER_CHANGE = "developer/change";
const SHOW_SPOT = "spot/show";

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
export const showSpot = (id) => {
  return {
    type: SHOW_SPOT,
    id,
  };
};

const initialState = {
  open: false,
  developer: false,
  spot: { status: false, id: 0 },
};
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
    case SHOW_SPOT:
      if (state.spot.status) {
        newStatus.spot = { status: false, id: 0 };
      } else newStatus.spot = { status: true, id: action.id };
      newState = Object.assign({}, state, newStatus);
      return newState;
    default:
      return state;
  }
};
export default menuReducer;
