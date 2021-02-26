import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deactivateSearch } from "../../store/Modals";
import * as sessionActions from "../../store/session";
import { Loader } from "@googlemaps/js-api-loader";

import { getMap } from "../../store/map";
import Spots from "../Spots";
import SpotDetail from "../SpotDetail";

import "./SearchModal.css";

Modal.setAppElement(document.getElementById("root"));

const SearchModal = () => {
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.modal.search);
  const tabState = useSelector((state) => state.searchTab);
  const spotStatus = useSelector((state) => state.menu.spot);
  const spots = useSelector((state) => state.spotState.spots);

  useEffect(async () => {
    const key = await getMap();
    const loader = new Loader({
      apiKey: key,
      version: "weekly",
    });
    loader.load().then(async () => {
      const geocoder = new window.google.maps.Geocoder();
      const latLang = await geocoder.geocode();
      new window.google.maps.Map(document.querySelector(".Map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  }, []);

  const onclick = () => {
    dispatch(deactivateSearch());
  };

  return (
    <>
      <Modal
        isOpen={searchState}
        onRequestClose={onclick}
        contentLabel="Login"
        className="SearchModalInner"
        overlayClassName="SearchModalOuter"
      >
        <div className="LoginShell">
          <div className="SearchModalOuterBox">
            <div className="SearchResults">
              {spots.map((spot) => (
                <Spots spot={spot} />
              ))}
            </div>
            {spotStatus.status && <SpotDetail />}
            <div className="Map"></div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default SearchModal;
