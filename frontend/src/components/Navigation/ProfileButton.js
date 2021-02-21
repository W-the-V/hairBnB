import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { activateLogin, deactivateLogin } from "../../store/loginModal";
import { activateSignUp, deactivateSignUp } from "../../store/signUpModal";
import LoginModal from "../LoginModal";
import SignUpModal from "../SignUpModal";
import { changeMenu } from "../../store/showMenu";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);
  const signUpState = useSelector((state) => state.signup);
  const menuState = useSelector((state) => state.menu);

  useEffect(() => {
    if (!menuState) return;

    const closeMenu = () => {
      dispatch(changeMenu());
    };

    document.querySelector("#root").addEventListener("click", closeMenu);

    return () =>
      document.querySelector("#root").removeEventListener("click", closeMenu);
  }, [menuState]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(deactivateLogin());
    dispatch(deactivateSignUp());
    dispatch(sessionActions.logout());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.demo());
  };

  return (
    <>
      {menuState && user && (
        <div className="menuBox">
          <nav className="menuSection">
            <NavLink to="/signup">
              <button className="menuButton">Messages</button>
            </NavLink>
            <NavLink to="/signup">
              <button className="menuButton">Notifications</button>
            </NavLink>
            <NavLink to="/signup">
              <button className="menuButton">Trips</button>
            </NavLink>
            <NavLink to="/signup">
              <button className="menuButton">Saved</button>
            </NavLink>
          </nav>
          <nav className="menuSection">
            <NavLink to="/signup">
              <button className="menuButton">Host your home</button>
            </NavLink>
            <NavLink to="/signup">
              <button className="menuButton">Host an experience</button>
            </NavLink>
            <NavLink to="/signup">
              <button className="menuButton">Account</button>
            </NavLink>
          </nav>
          <nav className="menuSection">
            <NavLink to="/signup">
              <button className="menuButton">Help</button>
            </NavLink>
            <NavLink to="/signup">
              <button className="menuButton" onClick={logout}>
                Log Out
              </button>
            </NavLink>
          </nav>
        </div>
      )}
      {loginState && !user && <LoginModal />}
      {signUpState && !user && <SignUpModal />}
      {menuState && !user && (
        <div className="menuBox">
          <div className="menuSection">
            <button
              className="menuButton"
              onClick={() => dispatch(activateLogin())}
            >
              Login
            </button>
            <button
              className="menuButton"
              onClick={() => dispatch(activateSignUp())}
            >
              Sign Up
            </button>
            <button className="menuButton" onClick={handleSubmit}>
              Demo
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
