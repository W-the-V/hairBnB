const PAGE_CHANGE = "page/change";

export const changePage = (page) => {
  return {
    type: PAGE_CHANGE,
    page,
  };
};

const initialState = { page: "Home" };
const pageReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case PAGE_CHANGE:
      newState = Object.assign({}, state, { page: action.page });
      return newState;
    default:
      return state;
  }
};
export default pageReducer;
