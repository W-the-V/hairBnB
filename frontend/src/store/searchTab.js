const BARBER = "searchTab/barber";
const SALON = "searchTab/salon";
const DONATION = "searchTab/donation";

export const barberToggle = () => {
  return {
    type: BARBER,
  };
};
export const salonToggle = () => {
  return {
    type: SALON,
  };
};
export const donationToggle = () => {
  return {
    type: DONATION,
  };
};

const initialState = { barber: false, salon: false, donation: false };
const searchTabReducer = (state = initialState, action) => {
  let newState;
  let newObj = {};
  switch (action.type) {
    case BARBER:
      if (state.salon) {
        newObj.salon = false;
      }
      if (state.donation) {
        newObj.donation = false;
      }
      if (state.barber) {
        newObj.barber = false;
      } else newObj.barber = true;
      newState = Object.assign({}, state, newObj);
      return newState;
    case SALON:
      if (state.barber) {
        newObj.barber = false;
      }
      if (state.donation) {
        newObj.donation = false;
      }
      if (state.salon) {
        newObj.salon = false;
      } else newObj.salon = true;
      newState = Object.assign({}, state, newObj);
      return newState;
    case DONATION:
      if (state.salon) {
        newObj.salon = false;
      }
      if (state.barber) {
        newObj.barber = false;
      }
      if (state.donation) {
        newObj.donation = false;
      } else newObj.donation = true;
      newState = Object.assign({}, state, newObj);
      return newState;
    default:
      return state;
  }
};
export default searchTabReducer;
