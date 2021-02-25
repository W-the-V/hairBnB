import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deactivateSearch } from "../../store/Modals";
import * as sessionActions from "../../store/session";

import "./SearchModal.css";

Modal.setAppElement(document.getElementById("root"));

const SearchModal = () => {
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.modal.search);
  const tabState = useSelector((state) => state.searchTab);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  let searchTerm;
  useEffect(() => {
    if (tabState.barber) searchTerm = "barber";
  }, [tabState]);

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
          {/* {tabState.barber && (
            <div className="formTitle">
              <h1>Barbershops</h1>
            </div>
          )}
          {tabState.salon && (
            <div className="formTitle">
              <h1>Salons</h1>
            </div>
          )}
          {tabState.donation && (
            <div className="formTitle">
              <h1>Hair Donation Centers</h1>
            </div>
          )} */}
          <div className="SearchModalOuterBox">
            <div className="SearchResults"></div>
            <div className="Map">MAP GOES HERE</div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default SearchModal;
