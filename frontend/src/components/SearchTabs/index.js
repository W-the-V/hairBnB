import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  barberToggle,
  salonToggle,
  donationToggle,
} from "../../store/searchTab";

function SearchTabs() {
  const tabState = useSelector((state) => state.searchTab);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!tabState.barber && !tabState.salon && !tabState.donation) return;
    const closeMenu = () => {
      if (tabState.barber) {
        dispatch(barberToggle());
      }
      if (tabState.donation) {
        dispatch(donationToggle());
      }
      if (tabState.salon) {
        dispatch(salonToggle());
      }
    };

    document
      .querySelector(".LandingShell")
      .addEventListener("click", closeMenu);

    return () => {
      document
        .querySelector(".LandingShell")
        .removeEventListener("click", closeMenu);
    };
  }, [tabState]);
  return (
    <div className="searchTabs">
      <button
        className="navButton searchButton"
        onClick={() => dispatch(barberToggle())}
      >
        Barbershops
      </button>
      <button
        className="navButton searchButton"
        onClick={() => dispatch(salonToggle())}
      >
        Salons
      </button>
      <button
        className="navButton searchButton"
        onClick={() => dispatch(donationToggle())}
      >
        Hair Donation
      </button>
    </div>
  );
}
export default SearchTabs;
