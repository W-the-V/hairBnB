import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  barberToggle,
  salonToggle,
  donationToggle,
} from "../../store/searchTab";

function SearchBar() {
  const dispatch = useDispatch();
  return (
    <div className="searchTabs">
      <button className="searchBtn" onClick={() => dispatch(barberToggle())}>
        Barbershops
      </button>
      <button className="searchBtn" onClick={() => dispatch(salonToggle())}>
        Salons
      </button>
      <button className="searchBtn" onClick={() => dispatch(donationToggle())}>
        Hair Donation
      </button>
    </div>
  );
}
export default SearchBar;
