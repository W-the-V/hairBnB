import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import src from "../../images/logotext.png";

import { changeMenu } from "../../store/showMenu";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const menuState = useSelector((state) => state.menu);

  const sessionLinks = <ProfileButton user={sessionUser} />;
  const openMenu = () => {
    if (menuState) return;
    dispatch(changeMenu());
  };

  return (
    <>
      <div className="navBar">
        <NavLink exact to="/">
          <button className="homeButton">
            <img className="logoText" src={src}></img>
          </button>
        </NavLink>
        <button className="navButton" onClick={() => openMenu()}>
          <i className="fas fa-bars"></i>
          <i className="fas fa-user-circle" />
        </button>
      </div>
      <div className="userMenuShell">{isLoaded && sessionLinks}</div>
    </>
  );
}

export default Navigation;
