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
    if (!tabState.barber) {
      document
        .getElementById("barberButton")
        .setAttribute("class", "navButton searchButton");
    }
    if (!tabState.salon) {
      document
        .getElementById("salonButton")
        .setAttribute("class", "navButton searchButton");
    }
    if (!tabState.donation) {
      document
        .getElementById("donationButton")
        .setAttribute("class", "navButton searchButton ");
    }
    if (!tabState.barber && !tabState.salon && !tabState.donation) return;
    const closeMenu = () => {
      if (tabState.barber) {
        dispatch(barberToggle());
        document
          .getElementById("barberButton")
          .setAttribute("class", "navButton searchButton");
      }
      if (tabState.donation) {
        document
          .getElementById("donationButton")
          .setAttribute("class", "navButton searchButton");
        dispatch(donationToggle());
      }
      if (tabState.salon) {
        document
          .getElementById("salonButton")
          .setAttribute("class", "navButton searchButton");
        dispatch(salonToggle());
      }
    };
    if (tabState.barber) {
      document
        .getElementById("barberButton")
        .setAttribute("class", "navButton searchButton active");
    }
    if (tabState.donation) {
      document
        .getElementById("donationButton")
        .setAttribute("class", "navButton searchButton active");
    }
    if (tabState.salon) {
      document
        .getElementById("salonButton")
        .setAttribute("class", "navButton searchButton active");
    }
    document.querySelector(".bodyShell").addEventListener("click", closeMenu);
    document.querySelector(".homeButton").addEventListener("click", closeMenu);
    return () => {
      document
        .querySelector(".bodyShell")
        .removeEventListener("click", closeMenu);
      document
        .querySelector(".homeButton")
        .removeEventListener("click", closeMenu);
    };
  }, [tabState]);
  return (
    <div className="searchTabs">
      <button
        className="navButton searchButton"
        id="barberButton"
        onClick={() => dispatch(barberToggle())}
      >
        <i className="fas fa-search"></i>
        Barbershops
      </button>
      <button
        className="navButton searchButton"
        id="salonButton"
        onClick={() => dispatch(salonToggle())}
      >
        <i className="fas fa-search"></i>
        Salons
      </button>
      <button
        className="navButton searchButton"
        id="donationButton"
        onClick={() => dispatch(donationToggle())}
      >
        <i className="fas fa-search"></i>
        Hair Donation
      </button>
    </div>
  );
}
export default SearchTabs;
