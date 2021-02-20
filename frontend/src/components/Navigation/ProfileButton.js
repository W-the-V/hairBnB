import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { deactivateLogin, activateLogin } from "../../store/loginModal";
import LoginModal from "./LoginModal";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);
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
      {loginState && <LoginModal />}
      {showMenu && !user && (
        <>
          <nav className="menuSection">
            <button
              className="menuButton"
              onClick={() => dispatch(activateLogin())}
            >
              Login
            </button>
            <NavLink to="/signup">
              <button className="menuButton">Sign Up</button>
            </NavLink>
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
