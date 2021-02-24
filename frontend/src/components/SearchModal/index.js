import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deactivateLogin } from "../../store/Modals";
import * as sessionActions from "../../store/session";
import { deactivateSearch } from "../../store/Modals";

import "./SearchModal.css";

Modal.setAppElement(document.getElementById("root"));

const customStyles = {
  content: {
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    height: "100%",
    width: "100%",
  },
};

const SearchModal = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.modal.search);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const onclick = () => {
    dispatch(deactivateSearch());
  };

  return (
    <>
      <Modal
        isOpen={loginState}
        onRequestClose={onclick}
        contentLabel="Login"
        style={customStyles}
        className="SearchOuter"
        overlayClassName="SearchInner"
      >
        <div className="LoginShell">
          <div className="formTitle">
            <h1>Log In</h1>
          </div>
          <form className="LoginForm" onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <div className="inputBox">
              <label>Username or Email</label>
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                className="formInput"
              />
            </div>
            <div className="inputBox">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="formInput"
              />
            </div>
            <button className="modalButton" type="submit">
              Log In
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default SearchModal;
