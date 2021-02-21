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
  switch (action.type) {
    case BARBER:
      if (state.salon) state.salon = !state.salon;
      if (state.donation) state.donation = !state.donation;
      state.barber = !state.barber;
      return state;
    case SALON:
      if (state.barber) state.barber = !state.barber;
      if (state.donation) state.donation = !state.donation;
      state.salon = !state.salon;
      return state;
    case DONATION:
      if (state.barber) state.barber = !state.barber;
      if (state.salon) state.salon = !state.salon;
      state.donation = !state.donation;
      return state;
    default:
      return state;
  }
};
export default searchTabReducer;
