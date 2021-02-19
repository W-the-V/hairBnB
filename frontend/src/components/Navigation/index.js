import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  const sessionLinks = <ProfileButton user={sessionUser} />;

  return (
    <div className="navBar">
      <NavLink exact to="/">
        <button className="navButton">Home</button>
      </NavLink>
      <div className="userMenuShell">{isLoaded && sessionLinks}</div>
    </div>
  );
}

export default Navigation;
