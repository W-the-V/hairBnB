import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { activateLogin } from "../../store/loginModal";
import { activateSignUp } from "../../store/signUpModal";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);
  const signUpState = useSelector((state) => state.signup);
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className="navButton" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && user && (
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
            <NavLink to="/signup">
              <button className="menuButton">Demo</button>
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
            <button className="menuButton" onClick={logout}>
              Log Out
            </button>
          </nav>
        </div>
      )}
      {loginState && !user && <LoginModal />}
      {signUpState && !user && <SignUpModal />}
      {showMenu && !user && (
        <>
          <nav className="menuSection">
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
            <NavLink to="/signup">
              <button className="menuButton">Demo</button>
            </NavLink>
          </nav>
        </>
      )}
    </>
  );
}

export default ProfileButton;
