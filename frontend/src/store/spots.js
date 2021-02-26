const GET_ALL = "get/all";
// const GET_BARBERS = "get/barbers";
// const GET_SALONS = "get/salons";
// const GET_DONATIONS = "get/donations";

const getAll = (spots) => {
  return {
    type: GET_ALL,
    spots,
  };
};

export const searchBarbers = async (dispatch) => {
  const res = await fetch("/api/type/Barbershop");
  const barbershops = await res.json();
  dispatch(getAll(barbershops));
  return barbershops;
};

export const searchSalons = async (dispatch) => {
  const res = await fetch("/api/type/Salon");
  const barbershops = await res.json();
  dispatch(getAll(barbershops));
};

export const searchDonations = async (dispatch) => {
  const res = await fetch("/api/type/Donation");
  const barbershops = await res.json();
  dispatch(getAll(barbershops));
};

const initialState = {
  spots: [
    {
      id: 0,
      price: 1000,
      description: "Default Spot",
      name: "Test",
      address: "1313 mockingbird ln",
      type: "Barbershop",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
};
const spotReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL:
      newState = Object.assign({}, state, action.spots);
      return newState;
    default:
      return state;
  }
};
export default spotReducer;
