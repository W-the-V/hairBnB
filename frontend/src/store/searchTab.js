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
        newObj.salon = !state.salon;
      }
      if (state.donation) {
        newObj.donation = !state.donation;
      }
      newObj.barber = !state.barber;
      newState = Object.assign({}, state, newObj);
      return newState;
    case SALON:
      if (state.barber) {
        newObj.barber = !state.barber;
      }
      if (state.donation) {
        newObj.donation = !state.donation;
      }
      newObj.salon = !state.salon;
      newState = Object.assign({}, state, newObj);
      return newState;
    case DONATION:
      if (state.salon) {
        newObj.salon = !state.salon;
      }
      if (state.barber) {
        newObj.barber = !state.barber;
      }
      newObj.donation = !state.donation;
      newState = Object.assign({}, state, newObj);
      return newState;
    default:
      return state;
  }
};
export default searchTabReducer;
