import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deactivateLogin } from "../../store/loginModal";
import * as sessionActions from "../../store/session";

Modal.setAppElement(document.getElementById("root"));

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const LoginModal = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);
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
    dispatch(deactivateLogin());
  };

  return (
    <>
      <Modal
        isOpen={loginState}
        onRequestClose={onclick}
        contentLabel="Login"
        style={customStyles}
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
                placeholder="Password"
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
export default LoginModal;
