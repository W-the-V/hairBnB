import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

import { changeMenu } from "../../store/showMenu";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const sessionLinks = <ProfileButton user={sessionUser} />;

  return (
    <div className="navBar">
      <NavLink exact to="/">
        <button className="homeButton">Home</button>
      </NavLink>
      <div className="userMenuShell">{isLoaded && sessionLinks}</div>
    </div>
  );
}

export default Navigation;
